require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
