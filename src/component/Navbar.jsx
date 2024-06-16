import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/image/critizn2.png";
import '../style/navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" width={118} height={68} />
        </a>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/tentang kami">Tentang Kami</a></li>
        <li><a href="/news">Berita</a></li>
        <li><a href="/contact">Kontak</a></li>
      </ul>

      <div className="button">
        <button onClick={() => navigate("/Aduan")}className="">Aduan</button>
      </div>
      
      
      <div className="nav-toggle" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
// flex gap-14 items-center font-bold text-black text-2xl
// bg-secondary px-[35px] rounded-[9px] w-[161px] h-[55px] font-bold border border-black
// "bg-primary pl-[97px] pr-[89px] pt-[34px] pb-[41px] flex justify-between items-center"
