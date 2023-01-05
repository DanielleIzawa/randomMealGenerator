import React from "react";
import Home from "./../pages/Home";
import Revenues from "./../pages/Revenues";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Routing() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vw",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <br />
          <div style={{ marginBottom: "6px" }}>Website</div>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/revenues" style={{ marginRight: "15px" }}>
            Revenues
          </Link>
        </div>
        <Routes>
          <Route path="/:name" element={<Home />} />
          <Route path="/about" element={<Revenues />} />
        </Routes>
      </Router>
    </>
  );
}
