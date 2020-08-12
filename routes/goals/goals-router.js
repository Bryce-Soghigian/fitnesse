const router = require("express").Router();
const knex = require("../config/knex-config");
/**
 * User id is a param required
 * Gets a usrs goal weights and gets the goals.
 */
router.get("/:id", (req, res) => {
  knex
    .select("*")
    .from("goals")
    .where({ userId: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/", (req, res) => {
  knex("goals")
    .insert({
      userId: req.body.userId,
      goalWeight: req.body.goalWeight,
      goalDate: req.body.goalDate,
    })
    .returning("*")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
