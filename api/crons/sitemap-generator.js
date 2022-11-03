const cron = require("node-cron"),
  fs = require("fs"),
  path = require("path"),
  { PostModel, UserModel } = require("./../models"),
  moment = require("moment");

const processSitemap = async () => {
  try {
    const sitempapPath = path.join(
      __dirname,
      "..",
      "..",
      "frontend-ssr",
      "public",
      "sitemap.xml"
    );
    let content = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.writearn.in/</loc>
      <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;
    console.log("Fetching blogs");
    const allBlogs = await PostModel.find({
      status: "active",
    }).populate("postType", {
      slug: 1,
    });
    allBlogs.forEach((blog) => {
      content += `
      <url>
        <loc>${process.env.FRONTEND_URL}/blog/${blog.postType.slug}/${
        blog.slug
      }</loc>
        <lastmod>${moment(
          blog.updated && blog.updated.length
            ? blog.updated[blog.updated.length - 1].date
            : blog.createdAt
        ).format("YYYY-MM-DD")}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    });
    console.log("Fetching users");
    const allUsers = await UserModel.find({
      userType: "creator",
      $or: [
        {
          status: {
            $exists: false,
          },
        },
        {
          status: "active",
        },
      ],
    });
    allUsers.forEach((user) => {
      content += `
      <url>
        <loc>${process.env.FRONTEND_URL}/user/${user._id}/@${
        user.username
      }</loc>
        <lastmod>${moment(user.createdAt).format("YYYY-MM-DD")}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `;
    });
    content += `</urlset>`;
    fs.writeFileSync(path.join(__dirname, "sitemap.xml"), content);
    fs.renameSync(path.join(__dirname, "sitemap.xml"), sitempapPath);
    console.log(`Sitemap updated!`);
  } catch (error) {
    console.log("Error occured while updating sitemap", error);
  }
};

const generateSiteMap = () => {
  // process once on server restart as well
  processSitemap();

  cron.schedule("0 1 * * *", processSitemap, {
    scheduled: true,
    timezone: "Asia/Kolkata",
  });
};
module.exports = generateSiteMap;
