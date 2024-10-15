import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer";
import Aboutus from "./Components/About/Aboutus";
import Room from "./Components/Rooms/Room";
import Signup from "./Components/Register/Signup";
import Login from "./Components/Login/Login";

import Contactus from "./Components/ContactUs/Contactus";
import Changepassowrd from "./Components/changepassword/Changepassowrd";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/changepassword" element={<Changepassowrd />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
