import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm"; 
import 'bootstrap/dist/css/bootstrap.css';

import "./index.css";

const App = () => (
  
  <div className="container">
    <header style={{ backgroundColor: "black", color: "white" }}>StudentApp1</header> 
    <StudentForm />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);