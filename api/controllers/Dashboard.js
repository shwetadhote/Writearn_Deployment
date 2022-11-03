const {
  RazorPayFundAccount
} = require("razorpayx-nodejs-sdk");
const { ErrorHelper } = require("./../helpers");
const { PostModel, PostViewModel, EarningModel, UserModel } = require("../models");
const moment = require("moment");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const postViews = async (req, res) => {
  try {
    const { user } = req;
    const userPosts = await PostModel.find({ author: user._id }).select({ _id: 1 });
    let condition = {
      postId: {
        $in: userPosts.map(post => post._id)
      }
    }
    const todayDate = new Date(
      moment()
        .utc({
          hours: 11,
          minutes: 59,
          seconds: 59,
        })
        .format()
    );

    const totalPostViews = await getPostTotalViews(condition);
    // Last 30 days post views
    const thirtyDayAgo = new Date(
      moment()
        .subtract(29, 'days')
        .utc({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        .format()
    );
    let lastMonthCondition = {
      $gte: thirtyDayAgo,
      $lte: todayDate,
    }
    const totalLastMonthPostViews = await getPostTotalViews({ ...condition, createdAt: lastMonthCondition, lastUpdatedAt: lastMonthCondition })
    // last 7 days post views
    const sevenDayAgo = new Date(
      moment()
        .subtract(7, 'days')
        .utc({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        .format()
    );
    let lastSevenDaysCondition = {
      $gte: sevenDayAgo,
      $lte: todayDate,
    }
    const totalLastSevenDaysPostViews = await getPostTotalViews({ ...condition, createdAt: lastSevenDaysCondition, lastUpdatedAt: lastSevenDaysCondition })

    return res.status(200).json({
      overall: totalPostViews,
      lastThrityDays: totalLastMonthPostViews,
      lastSevenDays: totalLastSevenDaysPostViews,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const totalEarnings = async (req, res) => {
  try {
    const { user } = req;
    const userPosts = await PostModel.find({ author: user._id }).select({ _id: 1 });
    let condition = {
      postId: {
        $in: userPosts.map(post => post._id)
      }
    }
    const todayDate = new Date(
      moment()
        .utc({
          hours: 11,
          minutes: 59,
          seconds: 59,
        })
        .format()
    );

    const totalEarnings = await getTotalEarnings(condition);
    // Last 30 days post views
    const thirtyDayAgo = new Date(
      moment()
        .subtract(29, 'days')
        .utc({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        .format()
    );
    let lastMonthCondition = {
      $gte: thirtyDayAgo,
      $lte: todayDate,
    }
    const totalLastMonthEarnings = await PostViewModel.aggregate([
      {
        $match: { ...condition, createdAt: lastMonthCondition, lastUpdatedAt: lastMonthCondition }
      },
      {
        $group: {
          _id: null,
          totalAmount: {
            $sum: "$amountEarned",
          },
        },
      },
    ]);
    // await getTotalEarnings({ ...condition, createdAt: lastMonthCondition })
    // last 7 days post views
    const sevenDayAgo = new Date(
      moment()
        .subtract(7, 'days')
        .utc({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        .format()
    );
    let lastSevenDaysCondition = {
      $gte: sevenDayAgo,
      $lte: todayDate,
    }
    const totalLastSevenDaysEarnings = await PostViewModel.aggregate([
      {
        $match: { ...condition, createdAt: lastSevenDaysCondition, lastUpdatedAt: lastSevenDaysCondition }
      },
      {
        $group: {
          _id: null,
          totalAmount: {
            $sum: "$amountEarned",
          },
        },
      },
    ]);
    // await getTotalEarnings({ ...condition, createdAt: lastSevenDaysCondition })

    return res.status(200).json({
      overall: totalEarnings,
      lastThrityDays: totalLastMonthEarnings && totalLastMonthEarnings.length ? totalLastMonthEarnings[0].totalAmount : 0,
      lastSevenDays: totalLastSevenDaysEarnings && totalLastSevenDaysEarnings.length ? totalLastSevenDaysEarnings[0].totalAmount : 0,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const totalPosts = async (req, res) => {
  try {
    const { user } = req;
    const totalPost = await PostModel.countDocuments({ author: user._id });
    const totalPendingPost = await PostModel.countDocuments({ author: user._id, status: 'pending' });
    const totalActivePost = await PostModel.countDocuments({ author: user._id, status: 'active' });
    const totalRejectedPost = await PostModel.countDocuments({ author: user._id, status: 'rejected' });

    return res.status(200).json({
      totalPost,
      totalActivePost,
      totalPendingPost,
      totalRejectedPost
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const availableBalance = async (req, res) => {
  try {
    const { user } = req;
    const availableBalance = await EarningModel.aggregate([
      {
        $match: {
          userId: user._id,
          status: {
            $ne: "paid"
          }
        }
      },
      {
        $group: {
          _id: null,
          amount: {
            $sum: {
              '$cond': [
                { '$eq': ['$status', 'partially paid'] },
                { $subtract: ['$amount', '$paidAmount'] },
                '$amount'
              ]
            },
          },
        },
      },
    ])
    let payoutEnabled = false;
    const { data } = await RazorPayFundAccount.getAll({
      contact_id: user.razorPayContactId,
    });
    payoutEnabled = data && data.count ? true : false
    return res.status(200).json({
      availableBalance: availableBalance && availableBalance.length ? availableBalance[0].amount : 0,
      payoutEnabled
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

// Common function to get post view by condition
getPostTotalViews = async (condition) => {
  let result = await PostViewModel.aggregate([
    {
      $match: condition
    },
    {
      $group: {
        _id: null,
        totalViews: {
          $sum: "$viewCount",
        },
      },
    },
  ]);
  return result && result.length ? result[0].totalViews : 0;
}

// Common function to get post view by condition
getTotalEarnings = async (condition) => {
  let result = await EarningModel.aggregate([
    {
      $match: condition
    },
    {
      $group: {
        _id: null,
        totalAmount: {
          $sum: "$amount",
        },
      },
    },
  ]);
  return result && result.length ? result[0].totalAmount : 0;
}

getAdminDashboardInfo = async (req, res) => {
  try {
    const totalEarning = await getTotalEarnings({});
    const userCount = await UserModel.countDocuments({ userType: "creator"});
    const postCount = await PostModel.countDocuments();
    return res.status(200).json({
      totalEarning: totalEarning.toFixed(2),
      userCount,
      postCount
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
}

module.exports = {
  postViews,
  totalEarnings,
  totalPosts,
  availableBalance,
  getAdminDashboardInfo
};
