const express = require("express");
const {
  register,
  login,
  logout,
} = require("../controllers/authController");
const {
  requireAuth,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", requireAuth, logout);

router.get("/profile", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
