import { useState } from "react";
import { Header } from "./components/Header";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Header />
    </div>
  );
}
