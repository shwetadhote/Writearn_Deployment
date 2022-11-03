const { ErrorHelper } = require("./../helpers");
const { SettingModel } = require("./../models");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSettings = async (req, res) => {
  try {
    const settings = await SettingModel.find();
    return res.status(200).json({
      data: settings,
      message: "Settings fetched succcessfully.",
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
const updateSettings = async (req, res) => {
  try {
    for (const k in req.body) {
      if (req.body.hasOwnProperty(k)) {
        const d = req.body[k];
        const prevSetting = await SettingModel.findOne({ key: k });
        if (!prevSetting) {
          await SettingModel.create({ key: k, value: d });
        } else {
          await SettingModel.updateOne({ key: k }, { $set: { value: d } });
        }
      }
    }
    return res.status(200).json({
      message: "Settings updated succcessfully.",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
module.exports = {
  getSettings,
  updateSettings,
};
