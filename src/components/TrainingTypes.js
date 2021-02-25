import React, { useEffect } from "react";

const TrainingTypes = ({ getTrainingTypes }) => {
  useEffect(() => {
    if (sessionStorage.length != 0) {
      console.log(sessionStorage.getItem("loggedInUser"));
      fetch("https://trainning-rest-api.herokuapp.com/v1/training-types", {
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Busque los tipos", res);
          getTrainingTypes(res);
        })
        .catch((res) => console.log("Error: ", res));
    }
  }, []);

  return <div></div>;
};

export default TrainingTypes;
