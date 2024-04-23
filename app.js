const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  console.log("angggap saja ini feature login");
  res.status(200).json({ access_token: "eyoashdfponsaiu0" });
});

app.listen(3000, () => console.log("running on port 3000"));
