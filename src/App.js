import React from "react";
import "./App.css";
import MyCompetence from "./Components/MyCompetence";
import MyExperience from "./Components/MyExperience";
import MyProject from "./Components/MyProject";
import About from "./Components/About";
import Image from "./Components/Image";

function App() {
  return (
    <div class="container">
      <h1 id="head">Mon Portfolio</h1>
      <h2>A propos de Moi</h2>
      <Image imageSource="https://muqtasidportfolio.netlify.app/_next/image?url=%2Fimages%2Fhero4.png&w=384&q=75" />
      <About UserName="EL BOUDALI Ossama" />

      <p>
        developpeur web passionne specialise dans les technologies Front-end{" "}
      </p>
      <h2>Competences</h2>
      <MyCompetence />
      <h2> Experiences</h2>
      <MyExperience />
      <h2> Projets</h2>
      <MyProject />
      <p id="enbas">@2024 Mon Portfolio</p>
    </div>
  );
}

export default App;
