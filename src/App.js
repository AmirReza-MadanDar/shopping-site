import React, { Component } from "react";
import "./App.css";
import Home from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
