import { useState } from "react";
import { Header } from "./components/Header";
import "./css/App.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}
