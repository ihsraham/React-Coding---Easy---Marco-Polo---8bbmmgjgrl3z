import React from "react";
import "../styles/App.css";
import { useState } from "react";
const App = () => {
  const [marco, setMarco] = useState(true);
  return (
    <div id="main">
      <h1 id="marco-polo">{marco ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={() => setMarco(!marco)}>
        {marco ? "Polo" : "Marco"}
      </button>
    </div>
  );
};

export default App;
