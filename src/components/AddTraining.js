import React, { useState, useEffect } from "react";

const AddTraining = ({ trainingTypes }) => {
  const [minutes, setMinutes] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");

  const handleChangeWeight = (event) => {
    const valor = event.target.value;
    setWeight(valor);
  };

  const handleChangeMinute = (event) => {
    const valor = event.target.value;
    setMinutes(valor);
  };

  const handleChangeType = (event) => {
    const valor = event.target.value;
    setType(valor);
  };

  /*useEffect(() => {
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
          const { id, username, height, token } = JSON.parse(
            sessionStorage.getItem("loggedInUser")
          );
          setUserId(id);
          setTrainingTypes(res);
        })
        .catch((res) => console.log("Error: ", res));
    }
  }, []);
  */

  const btnSaveTraining = () => {
    const { id, username, height, token } = JSON.parse(
      sessionStorage.getItem("loggedInUser")
    );
    const data = {
      minutes: +minutes,
      trainning_type: +type,
      user_id: id,
      weight: weight,
    };

    fetch("https://trainning-rest-api.herokuapp.com/v1/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          alert(res.message);
        } else {
          console.log("Agregue!", res);
          alert("Ejercicio agregado con exito");
        }
      })
      .catch((res) => console.log("Error: ", res));
  };

  return (
    <form onSubmit={btnSaveTraining}>
      <label>Minutes</label>
      <input type="number" onChange={handleChangeMinute} />
      <label>Training</label>
      <select value={type} onChange={handleChangeType}>
        <option value="">Ingrese una opción:</option>
        {trainingTypes.map((training) => (
          <option value={training.id}>{training.name}</option>
        ))}
      </select>
      <label>Current Weight</label>
      <input type="number" onChange={handleChangeWeight} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTraining;
