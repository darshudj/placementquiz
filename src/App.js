import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Geograpy from "./components/Geograpy";
import { History } from "./components/History";
import Home from "./components/Home";
import Polity from "./components/Polity";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/geograpy" element={<Geograpy/>} />
      <Route  path="/"  element={<Home/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/polity" element={<Polity/>} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
