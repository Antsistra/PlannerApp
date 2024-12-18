const supabase = require("../config/supabase");

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Tidak ada token otentikasi" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { data, error } = await supabase.auth.getUser(
      token
    );

    if (error || !data.user) {
      return res
        .status(401)
        .json({ error: "Token tidak valid" });
    }

    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Otentikasi gagal" });
  }
};

module.exports = { requireAuth };
