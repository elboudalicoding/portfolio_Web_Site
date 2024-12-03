// import "./App.css";
// import Competence from "./Components/Competence";
// import { useState } from "react";
// import Experience from "./Components/experience";
// import Projets from "./Components/Projets";
// let index = 4;
// let index2 = 3;
// let index3 = 3;
// function App() {
//   const [dataShow, setDataShow] = useState({
//     competencesData: [
//       {
//         key: 1,
//         competenceName: "java",
//       },
//       {
//         key: 2,
//         competenceName: "css",
//       },
//       {
//         key: 3,
//         competenceName: "react.js",
//       },
//     ],
//     experienceData: [
//       { key: 1, experienceName: "exp1" },
//       { key: 2, experienceName: "exp2" },
//     ],
//     projectData: [
//       { key: 1, projectName: "p1" },
//       { key: 2, projectName: "p2" },
//     ],
//   });
//   const [dataInput, setDataInput] = useState({
//     competenceInput: "",
//     experienceInput: "",
//     projectInput: "",
//   });

//   const competencesList = dataShow.competencesData.map((competence) => {
//     return (
//       <div>
//         <li key={competence.key}> {competence.competenceName}</li>
//       </div>
//     );
//   });
//   const experiencesList = dataShow.experienceData.map((experience) => {
//     return (
//       <div>
//         <li key={experience.key}> {experience.experienceName}</li>
//       </div>
//     );
//   });
//   const projectsList = dataShow.projectData.map((project) => {
//     return (
//       <div>
//         <li key={project.key}> {project.projectName}</li>
//       </div>
//     );
//   });
//   function handleCompetenceClick() {
//     setDataShow({
//       ...dataShow,
//       competencesData: [
//         ...dataShow.competencesData,
//         {
//           key: index,
//           competenceName: dataInput.competenceInput,
//         },
//       ],
//     });
//     index++;
//   }
//   function handleExperienceClick() {
//     setDataShow({
//       ...dataShow,
//       experienceData: [
//         ...dataShow.experienceData,
//         {
//           key: index2,
//           experienceName: dataInput.experienceInput,
//         },
//       ],
//     });
//     index2++;
//   }
//   function handleProjectClick() {
//     setDataShow({
//       ...dataShow,
//       projectData: [
//         ...dataShow.projectData,
//         {
//           key: index3,
//           projectName: dataInput.projectInput,
//         },
//       ],
//     });
//     index3++;
//   }

//   return (
//     <div className="App">
//       <h1>Mon Portfolio</h1>
//       <h3>A propos de Moi</h3>
//       <p>web developpement with react js and type script </p>
//       <h3>Competence</h3>
//       {competencesList}
//       <Competence
//         value={dataInput.competenceInput}
//         onChange={(e) =>
//           setDataInput({ ...dataInput, competenceInput: e.target.value })
//         }
//         onSubmit={handleCompetenceClick}
//       />

//       <h3>experience professionnelle</h3>
//       {experiencesList}
//       <Experience
//         value={dataInput.experienceInput}
//         onChange={(e) =>
//           setDataInput({ ...dataInput, experienceInput: e.target.value })
//         }
//         onSubmit={handleExperienceClick}
//       />
//       <h3>Projects :</h3>
//       {projectsList}
//       <Projets
//         value={dataInput.projectInput}
//         onChange={(e) =>
//           setDataInput({ ...dataInput, projectInput: e.target.value })
//         }
//         onSubmit={handleProjectClick}
//       />
//     </div>
//   );
// }

// export default App;
