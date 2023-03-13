import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup2 from "./components/Signup2";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup2" element={<Signup2 />} />
      </Routes>
    </div>
  );
}

export default App;
