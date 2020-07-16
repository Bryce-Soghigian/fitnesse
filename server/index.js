const express = require("express");

const server = express();
const PORT = process.env.PORT || 5555

server.listen(PORT,() => {
    console.log(`===========Server is up on ${PORT}===========`)
})