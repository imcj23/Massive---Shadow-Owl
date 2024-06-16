import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Forget from "./Forget"
import Home from "./Home"
import Aduan from "./Aduan"
import Form from "./Form"
import Berita from "./Berita";
import Berita1 from "./Berita1";
import Berita2 from "./Berita2";
import Contact_us from "./Contact-us";
import About_us from "./About-us";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Forget" element={<Forget/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Aduan" element={<Aduan/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Contact-us" element={<Contact_us/>} />
        <Route path="/About-us" element={<About_us/>} />
        <Route path="/Berita" element={<Berita/>} />
        <Route path="/Berita1" element={<Berita1/>} />
        <Route path="/Berita2" element={<Berita2/>} />
      </Routes>
    </Router>
  )
}