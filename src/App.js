import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Explore from "./Components/Explore/Explore";
import Aboutus from "./Components/About/Aboutus";
import Signup from "./Components/Register/Signup";
import Login from "./Components/Login/Login";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
