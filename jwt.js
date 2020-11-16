const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = "token secret";
//const expiresIn = 365 * 24 * 3600; // 365 days
const expiresIn = 600;

router.get("/create", (req, res) => {
  try {
    const payload = req.body;
    const token = jwt.sign(payload, secret, { expiresIn });

    res.status(200).json({ token: token });
  } catch (err) {
    res.json(err);
  }
});

// Bearer 인증타입
router.get("/verify", (req, res) => {
  const token = req.headers["bearer"];

  if (!token) {
    res.status(401);
    throw Error("No Authorization Bearer headers");
  }
  try {
    const data = req.body;
    const verify = jwt.verify(token, secret);

    res.status(200).json({ verify: verify, data: data });
  } catch (err) {
    console.log(`vertify err`);
    res.json(err);
  }
});

module.exports = router;
