import React, { useState } from "react";
import AddTraining from "./AddTraining";
import TrainingTypes from "./TrainingTypes";

const Dashboard = () => {
  const [trainingTypes, setTrainingTypes] = useState([]);

  const getTrainingTypes = (trainingType) => {
    setTrainingTypes(trainingType);
  };

  console.log(trainingTypes);

  return (
    <div>
      <h1>Dashboard</h1>
      <TrainingTypes getTrainingTypes={getTrainingTypes} />
      <AddTraining trainingTypes={trainingTypes} />
    </div>
  );
};

export default Dashboard;
