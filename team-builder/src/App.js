import React, { useState } from "react";
import Form from "./components/TeamForm";
import "./App.css";
import TeamMember from "./components/TeamMembers";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      firstname: "First Name",
      lastname: "Last Name",
      email: "Email",
    },
  ]);

  const addNewPerson = (tm) => {
    const newTeamMember = {
      id: Date.now(),
      firstname: tm.firstname,
      lastname: tm.lastname,
      email: tm.email,
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div className="App">
      <h1> Team Members! </h1>
      <Form addNewPerson={addNewPerson} />
      <TeamMember teamMembers={teamMembers} />
    </div>
  );
}

export default App;
