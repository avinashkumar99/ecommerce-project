import React from "react";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hero from "./components/Hero";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
