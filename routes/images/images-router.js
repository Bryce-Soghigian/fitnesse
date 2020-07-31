const router = require('express').Router();
const knex = require("../config/knex-config")


/**
 * gets all of the users images
 */
router.get("/:userId",(req,res) => {
    knex.select()
    .where({userId:req.params.userId})
    .from("images")
    .then(images => {
        console.log(images,"IMAGES")
        res.status(200).json(images)
    })
})
/**
 * Posting an image to users array
 */
router.post("/",(req,res) => {
    knex("images")
    .insert({
        userId:req.body.userId,
        imageUrl:req.body.imageUrl,
        currentDate:req.body.currentDate
    })
    .returning("*")
    .then(data => {
        console.log(data)
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
    
})

module.exports = router