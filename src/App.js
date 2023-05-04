import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import HouseList from "./components/HouseList";
import NavBar from "./components/navBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <HouseList />
    </>
  );
}

export default App;
