const router = require("express").Router();
const knex = require("../config/knex-config")
/**
 * Post new entry
 * 
 */
router.post("/",(req,res) => {
    knex("fitnessData")
    .insert({...req.body})
    .returning("*")
    .then(data => {
        res.status(201).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
})

/**
 * Get users fitness data
 */
router.get("/:id",(req,res) => {
    knex.select("*")
    .where({ userId: req.params.id })
    .from("fitnessData")
    .then(fitnessData => {
        console.log(fitnessData,"fitnessData")
        res.status(200).json(fitnessData)
    })
})
module.exports = router