const router = require("express").Router();
const knex = require("../config/knex-config")
/**
 * Post new entry
 * TABLE LOOKS LIKE 
 *       table.increments();
      table.integer("userId").references("id").inTable("users");
      table.integer("weight")
      table.integer("calorieCount")
      table.string("currentDate").notNullable();
      table.text("workoutDuration")
 */
router.post("/",(req,res) => {
    knex("fitnessData")
    .insert({
        userId:req.body.userId,
        weight:req.body.weight,
        calorieCount:req.body.calorieCount,
        currentDate:req.body.currentDate,
        workoutDuration:req.body.workoutDuration
    })
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
    }).catch(err => {
        res.status(500).json(err)
    })
})
/**
 * Gets a users weight history
 * 
 */
router.get("/weight/:userId", (req,res) => {
    knex.select("weight","currentDate")
    .from("fitnessData")
    .where({userId:req.params.userId})
    .then(results => {
        res.status(200).json(results)
    }).catch(err =>{
        res.status(500).json(err)
    })
})
module.exports = router