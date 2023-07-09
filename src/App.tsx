import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Redirect from "./components/Redirect";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slug" element={<Redirect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
