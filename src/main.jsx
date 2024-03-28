import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    <hr />
  </div>
  // </React.StrictMode>
);
