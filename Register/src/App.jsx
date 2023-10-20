//import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import NotFoundComponent from "./NotFoundComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
