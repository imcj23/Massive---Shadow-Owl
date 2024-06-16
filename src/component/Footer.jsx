import { useEffect } from "react";
import AOS from "aos";
import Logo from "../assets/image/critizn2.png"
import {FaPhone, FaEnvelope} from "react-icons/fa";
import "../style/footer.css"
import "aos/dist/aos.css";


export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer className="footer rounded-t-3xl" data-aos="fade-up">
      <div className="container-footer mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/6 text-center md:text-left">
        <img alt="Logo" src={Logo}/>
        </div>
        <div className="w-full md:w-1/6 text-center md:text-left">
        <h2 className="font-bold text-lg mb-4">Informasi</h2>
          <ul className="list-unstyled ">
            <li><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Hubungi Kami</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 text-center md:text-left">
          <h2 className="font-bold text-lg mb-4">Tautan Kami</h2>
          <ul className="list-unstyled ">
            <li><a href="#" className="text-gray-400 hover:text-white">Dukungan</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Kebijakan Pribadi</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 text-center md:text-left">
          <h2 className="font-bold text-lg mb-4">Layanan Kami</h2>
          <ul className="list-unstyled">
            <li><a href="#" className="text-gray-400 hover:text-white">Aduan</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Berita</a></li>
          </ul>
        </div>        
        <div className="w-full md:w-1/6 text-center md:text-left">
          <h2 className="font-bold text-lg mb-4 mt-5">Hubungi Kami</h2>
          <div className="flex gap-2 mt-5 ">
                    <FaPhone className="mt-1"/>
                    <p className="font-medium">+62 8976 8976 </p>
                </div>
                <div className="flex gap-2 mt-5">
                    <FaEnvelope className="mt-2"/>
                    <p className="font-medium">ppidkotajogja@gmail.com</p>
                </div>
          </div>
        </div>
        <div className="mt-[70px]">
              <svg width="100%" height="3" viewBox="0 0 1274 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="1.47852" x2="1274.01" y2="1.47852" stroke="white"/>
              </svg>
              <p className="justify-center flex mt-[20px] pb-[67px]">Hak cipta &copy; 2024. Hak cipta dilindungi undang undang</p>
      </div>
    </footer>
  )
}
