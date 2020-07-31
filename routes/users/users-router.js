const router = require("express").Router();
const bcrypt = require("bcryptjs");
const knex = require("../config/knex-config");
const { generateToken } = require("../../utils/generateToken");
const Users = require("./users-knex")
/**
 * Registers a new user and hashes their password
 */
router.post("/signup", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
  
    Users.add(user)
      .then((saved) => {
        console.log(saved);
        res.status(201).json(saved);
      })
      .catch((data) => {
        res.status(200).json(data);
      });
  });
  

/**
 * Logs in an existing user
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  knex("users")
    .where({ email })
    .then((user) => {

      
       if (user && bcrypt.compareSync(password, user[0].password)) {
        const token = generateToken(user);
        const id = user[0].id;
        let split = req.body.email.split("@");
        let name = user[0].fullname;
        const username = split[0]
        res.status(200).json({
            userId:id,
            fullname:name,
            email:email,
            username:username,
            token:token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
    console.log(err)
      res.status(500).json(err);
    });
});

module.exports = router;
