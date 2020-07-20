const router = require('express').Router();
const knex = require("../config/knex-config")


/**
 * gets all of the users images
 */
router.get("/:userId",(req,res) => {
    const {userId} = req.params;
    knex.select()
    .where("images.userId", userId)
    .from("images")
    .then(images => {
        console.log(images,"IMAGES")
        res.status(200).json(images)
    })
})

module.exports = router