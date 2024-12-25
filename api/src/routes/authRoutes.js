const express = require("express");
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const {
  requireAuth,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/logout", requireAuth, logout);
router.post("/forgot-password", forgotPassword);

router.get("/profile", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
