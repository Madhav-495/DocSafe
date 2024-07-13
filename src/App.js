import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Documents from "./pages/Documets";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Alldocuments from "./pages/Alldocuments";
import Section1 from "./components/Section1";
// import Header from "./components/header";

import { Routes, Route } from "react-router-dom";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
// import Section6 from "./components/Section6";
// import Navbar from "./components/Navbar1";
// import Footer from "./components/Footer";
// import Credits from "./components/Credits";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Router> */}
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Section1 />} />
          {/* <Route path="/" element={<Section2 />} />
          <Route path="/" element={<Section3 />} />
          <Route path="/" element={<Section3 />} />
          <Route path="/" element={<Section4 />} />
          <Route path="/" element={<Section5 />} />
          <Route path="/" element={<Section6 />} />
          <Route path="/" element={<Footer />} />
          <Route path="/" element={<Credits />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
          <Route path="/alldocuments" element={<Alldocuments />} />
        </Routes>
      {/* </Router> */}
      {/* <Home />
      <About />
      <Documents />
      <Contactus />
      <Login />
      <Profile />
      <Register />
      <Update /> */}
    </div>
  );
}

export default App;
