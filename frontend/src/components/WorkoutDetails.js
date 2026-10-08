import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Data Fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts${workout._id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: workout });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        <strong>Load:(in Kgs) </strong>
        {workout.load}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>

      <span onClick={handleClick} class="material-symbols-outlined">
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
