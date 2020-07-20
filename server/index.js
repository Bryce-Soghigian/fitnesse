const express = require("express");
const imageRouter = require("./routes/images/images-router")
const userRouter = require("./routes/users/users-router")
const cors = require("cors")
const server = express();
const PORT = process.env.PORT || 5555
server.listen(PORT,() => {
    console.log(`===========Server is up on ${PORT}===========`)
})


server.use(express.json())
server.use(cors())


server.use("/api/v1/userRouter",userRouter)
server.use("/api/v1/imageRouter",imageRouter)
