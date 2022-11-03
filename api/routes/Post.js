const express = require("express"),
  { UploadHelper, PasswordHelper } = require("./../helpers");
const { validateDomain } = require("../helpers/Domain");
router = express.Router();

const { PostController } = require("./../controllers");

router.get("/", PasswordHelper.validateLogin, PostController.getPosts);
router.get("/post-type/:postType", PostController.getPostsByPostType);
router.get("/all", PostController.getAllActivePosts);
router.get("/related-post/:postType", PostController.getRelatedPosts);
router.get("/user/:id", PostController.getPostsByUserId);
router.get("/author/:authorId/more", PostController.getMoreAuthorPost);

router.get(
  "/:id/comment",
  PasswordHelper.validateLogin,
  PostController.postComments
);
router.get(
  "/details/:id/:slug",
  PasswordHelper.validateLogin,
  PostController.getSinglePost
);
router.delete("/:id", PasswordHelper.validateLogin, PostController.deletePost);
router.post(
  "/",
  PasswordHelper.validateLogin,
  UploadHelper.single("featuredImage"),
  PostController.addPost
);
router.post("/like/:id", PasswordHelper.validateLogin, PostController.likePost);
router.post(
  "/dislike/:id",
  PasswordHelper.validateLogin,
  PostController.dislikePost
);
router.post(
  "/view/:id",
  PasswordHelper.validateLogin,
  validateDomain,
  PostController.viewPost
);
router.post(
  "/comment/:id",
  PasswordHelper.validateLogin,
  PostController.addcommentPost
);
router.put(
  "/:id",
  PasswordHelper.validateLogin,
  UploadHelper.single("featuredImage"),
  PostController.updatePost
);
/* Admin routes starts */
router.get(
  "/admin",
  PasswordHelper.validateAdminLogin,
  PostController.getAllPosts
);
router.post(
  "/admin/change-status",
  PasswordHelper.validateAdminLogin,
  PostController.updateStatus
);
router.get(
  "/admin/user/:id",
  PasswordHelper.validateAdminLogin,
  PostController.getAllPostsByUserId
);
router.get(
  "/get-post-engagement/:id",
  PasswordHelper.validateLogin,
  PostController.fetchPostEngagement
);

router.patch(
  "/admin/:id",
  PasswordHelper.validateAdminLogin,
  PostController.banfromTrending
);
/* Admin routes ends */

router.get("/:slug", PostController.getSinglePubicPost);
module.exports = router;
