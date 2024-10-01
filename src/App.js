
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Explore from "./Components/Explore/Explore";
import Aboutus from "./Components/About/Aboutus";
import Room from "./Components/Rooms/Room";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/rooms" element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
