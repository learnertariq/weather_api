import React from "react";

import Weathers from "./components/Weathers";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App(props) {
  return (
    <div className="container">
      <Weathers />
    </div>
  );
}

export default App;
