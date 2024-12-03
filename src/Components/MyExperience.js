import React from "react";
import { useState } from "react";
function MyExperience() {
  const [experiences, setExperiences] = useState([
    "developpeur web chez X Company 2018",
    "Stage en developpement web chez Y Company 2015",
  ]);
  const [value, setValue] = useState("");
  const handleAddClick = (event) => {
    event.preventDefault();
    setExperiences([...experiences, value]);
    setValue(""); // Reset the input field
  };
  const experiencesList = experiences.map((experience) => {
    return (
      <div>
        <li>{experience}</li>
      </div>
    );
  });
  return (
    <div>
      {experiencesList}
      <Experience
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleAddClick}
      />
    </div>
  );
}
const Experience = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit">Ajout Experience</button>
    </form>
  );
};

export default MyExperience;
