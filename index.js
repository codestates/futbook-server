const express = require("express");
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

//미들웨어
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "true",
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
    credentials: true,
  })
);

//https를 위한 SSL인증서
const key = "";
// const key = fs.readFileSync(process.env.SSL_PRIVATE);

//서버 여는 코드
if (key) {
  https.createServer({ key }, app).listen(80, () => {
    console.log("https server working");
  });
} else {
  app.listen(80, () => {
    "key is not exists";
  });
}
