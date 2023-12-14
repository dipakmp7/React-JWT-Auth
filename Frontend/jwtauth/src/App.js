import React from "react";        // React for creating React components.
import {BrowserRouter, Routes, Route} from 'react-router-dom'  //for handling routing. BrowserRouter is used for wrapping the entire application, while Routes and Route are used for defining routes.
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";   // Register, Home, and Login components from the specified file paths.

function App() {
  return (
    // <div>Dipak</div>
    //protectesd routes
    < BrowserRouter>
      <Routes>              
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
    </BrowserRouter>

// This is your main App component. It uses the BrowserRouter to wrap your application and provide the routing functionality. Inside it, you have a Routes container that contains several Route components.

// The first Route is for the path '/', and it renders the Home component when the path matches.
// The second Route is for the path '/login', and it renders the Login component.
// The third Route is for the path '/register', and it renders the Register component.

// Each Route is associated with a specific path and renders the corresponding component when that path is matched.
  );
}

export default App;
