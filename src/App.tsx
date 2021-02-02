import React from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/common/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
