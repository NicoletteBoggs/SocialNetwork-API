const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:userId/friends/:friendId").delete(removeFriend).post(addFriend);

module.exports = router;
