import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Aduan from "./Aduan/Aduan";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Aduan" element={<Aduan/>}/>
        {/* <Route path="/Aduan" element={<Aduan/>}/> */}
      </Routes>
    </Router>
  )
}