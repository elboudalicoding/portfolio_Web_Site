import React, { useState } from "react";

function MyCompetence() {
  const [competences, setCompetences] = useState([
    "React.js",
    "Next.js",
    "Java",
  ]);
  const [value, setValue] = useState("");

  const handleAddClick = (event) => {
    event.preventDefault();
    setCompetences([...competences, value]);
    setValue(""); // Reset the input field
  };
  const competenceList = competences.map((competence) => {
    return (
      <div>
        <li>{competence}</li>
      </div>
    );
  });
  return (
    
    <div>
      {competenceList}
      <Competence
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleAddClick}
      />
    </div>
  );
}
const Competence = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit">Ajout Compétence</button>
    </form>
  );
};
export default MyCompetence;
