import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';

// import Contato from './pages/Contato';
 
export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/"        element={<Home />}    />
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Router>
  );
}