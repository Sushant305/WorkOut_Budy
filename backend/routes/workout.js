const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

/*
 * Routes: /api/workouts
 * method: GET
 * description: get all the workouts
 * parameters: none
 * Access : Public
 */

router.get("/", (req, res) => {
  res.json({
    message: "GET all workouts",
  });
});

/*
 * Routes: /api/workouts/:id
 * method: GET
 * description: get a single workout by its id
 * parameters: id
 * Access : Public
 */
router.get("/:id", (req, res) => {
  //   const { id } = req.params;

  res.json({
    message: "GET a single workout by id",
  });
});

/*
 * Routes: /api/workouts/
 * method: POST
 * description: Create / add a new workout
 * parameters: none
 * Access : Public
 */
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
});

/*
 * Routes: /api/workouts/:id
 * method: DELETE
 * description: Delete a workout by using its id
 * parameters: id
 * Access : Public
 */
router.delete("/:id", (req, res) => {
  //   const { id } = req.params;

  res.json({
    message: "Delete a workout successfully",
  });
});

/*
 * Routes: /api/workouts/:id
 * method: PATCH
 * description: Update a workout by its id
 * parameters: id
 * Access : Public
 */
router.patch("/:id", (req, res) => {
  //   const { id } = req.params;

  res.json({
    message: "update a workout successfully",
  });
});

module.exports = router;
