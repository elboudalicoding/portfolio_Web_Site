import React from "react";
import { useState } from "react";
let index = 1;
function MyProject() {
  const [projects, setProjects] = useState([
    "  App mobile (Crossplateform) of restaurant management",
    " project created by  Flutter and Dart ,using data base NoSQL <Firebase>",
  ]);
  const [value, setValue] = useState("");
  const handleAddClick = (event) => {
    event.preventDefault();
    setProjects([...projects, value]);
    setValue(""); // Reset the input field
  };
  const projectsList = projects.map((project, index) => {
    return (
      <div key={index}>
        <h3>project {index + 1}</h3>
        <li>{project}</li>
      </div>
    );
  });
  return (
    <div>
      {projectsList}
      <Project
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleAddClick}
      />
    </div>
  );
}
const Project = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit">Ajout Projets</button>
    </form>
  );
};

export default MyProject;
