import "./App.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { NavBar } from "./components/Navbar";
import { SingleCocktail } from "./pages/SingleCocktail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
