import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    // <div>Dipak</div>
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
