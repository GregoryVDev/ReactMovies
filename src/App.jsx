import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home.jsx";
import { Like } from "./pages/Like.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </BrowserRouter>
  );
}
