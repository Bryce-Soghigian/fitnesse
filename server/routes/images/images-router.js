const router = require('express').Router();
const knex = require("../config/knex-config")


/**
 * gets all of the users images
 */
router.get("/:userId",(req,res) => {
    const {userId} = req.params;
    knex.select()
    .where({userId:userId})
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
    const {body} = req.body;
    knex("images")
    .insert({...body})
    .returning("*")
    .then(data => {
        console.log(data)
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
    
})

module.exports = router