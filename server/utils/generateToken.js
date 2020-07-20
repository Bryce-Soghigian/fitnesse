const jwt = require("jsonwebtoken");
function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
  
    const options = {
      expiresIn: "8h",
    };
  
    return jwt.sign(payload, process.env.jwtSecret, options);
  }

module.exports = {generateToken};