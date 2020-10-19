import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HorizontalNonLinearStepper from "./components/Stepper";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <HorizontalNonLinearStepper />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
