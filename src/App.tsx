import React from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Header />
    </div>
  );
}

export default App;
