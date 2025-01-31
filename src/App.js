import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import Navbar from './components/Navbar.js'
import Home from './Pages/Home.js'
import Computers from "./Pages/services/Computers.js"
import Footer from './components/Footer.js'



function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/services/computers" element={<Computers />}/>          
        </Routes>
        <Footer />
      </Router>
     
    
  );
}

export default App;
