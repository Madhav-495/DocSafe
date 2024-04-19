import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Complaint from "./components/Complaint";
import Credits from "./components/Credits";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Profile  from "./components/Profile"
import TextEditor from "./components/TextEditor";
import Sidebars from "./components/Sidebars";
import Home from './components/Home'
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/'  element = {<Home />} />
          <Route path='/Login'  element = {<Login />} />
          <Route path='/Sidebar'  element = {<Sidebars />} />
          <Route path='/Profile' element = {<Profile/>} /> 
          <Route path='/Complaint' element={<Complaint></Complaint>} />
        </Routes>
      </BrowserRouter>
    </>
    

  );
}

export default App;
