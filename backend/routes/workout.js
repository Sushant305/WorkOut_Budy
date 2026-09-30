const express = require("express");
const router = express.Router();

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
router.post("/", (req, res) => {
//   const { id } = req.params;

  res.json({
    message: "New workout added successfully",
  });
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
