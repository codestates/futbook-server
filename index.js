const express = require("express");
// const fs = require("fs");
// const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//미들웨어
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
    credentials: true,
  })
);

//라우트 분기
const bookingRouter = require("./routes/booking");
const signRouter = require("./routes/sign");
const userRouter = require("./routes/user");
const futsalRouter = require("./routes/futsal");

app.use("/booking", bookingRouter);
app.use("/sign", signRouter);
app.use("/user", userRouter);
app.use("/futsal", futsalRouter);

//응답 잘가는 지 확인
app.get("/", (req, res) => {
  res.send("server connected");
});

app.listen(process.env.SERVER_PORT, () => {
  "server start";
});

/* https로 서버 여는 과정중 실패, 후에 다시 시도.
const key = fs.readFileSync('');

if (key) {
  https.createServer({ key }, app).listen(443, () => {
    console.log("https server working");
  });
} else {
  app.listen(80, () => {
    "key is not exists";
  });
}
*/
