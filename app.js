const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/register", (req, res) => {
  console.log("anggap saja ini feature register dar der dor");
  res.status(201).json({ msg: "register berhasil" });
});

app.listen(PORT, () => console.log("haihu " + PORT));
