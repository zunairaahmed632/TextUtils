import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setALert] = useState(null);

  //Display aLert
  const showAlert = (message, type) => {
    setALert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setALert(null);
    }, 1500);
  };

  //For Dark Theme
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been successfully enabled.", "Success! ");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been successfully enabled.", "Success! ");
      //document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About mode={mode} />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  title="Enter your Text to Analyze"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
