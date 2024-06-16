import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/image/critizn2.png";
import "../style/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <nav className="nav" data-aos="fade-down" data-aos-delay="">
      <div className="nav-logo">
        <a onClick={() => navigate("/Home")}>
          <img src={Logo} alt="logo" width={118} height={68} />
        </a>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/About-us">Tentang kami</Link>
        <Link to="/Contact-us">Kontak</Link>
        <Link to="/Berita">Berita</Link>
        <button onClick={() => navigate("/Aduan")} className="">
          Aduan
        </button>
      </ul>

      <div className="nav-toggle" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
