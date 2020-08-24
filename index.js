const express = require("express");
const cors = require("cors");
const imageRouter = require("./routes/images/images-router");
const userRouter = require("./routes/users/users-router");
const fitnessRouter = require("./routes/fitness/fitness-router");
const goalsRouter = require("./routes/goals/goals-router.js");
const server = express();
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
  console.log(`===========Server is up on ${PORT}===========`);
});
server.get("/", (req, res) => {
  res.status(200).json({ message: "server_is_awake" });
});

server.use(express.json());
server.use(cors());
server.use("/api/v1/fitnessRouter", fitnessRouter);
server.use("/api/v1/userRouter", userRouter);
server.use("/api/v1/imageRouter", imageRouter);
server.use("/api/v1/goalsRouter", goalsRouter);
