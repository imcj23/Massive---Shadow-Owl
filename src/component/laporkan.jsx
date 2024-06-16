// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import imgcasual from "../assets/image/casual.png";
import { useNavigate } from "react-router-dom";
import "../style/laporkan.css";
import "aos/dist/aos.css";
export default function Laporkan() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex justify-between gap-[92px] mt-[100px] mx-[100px]">
      <div className="w-[628px]" data-aos="fade-right" data-aos-delay="200">
        <h1 className="text-[64px] font-bold text-center text-white">Aduan</h1>
        <p className="text-[20px] font-normal mt-6 text-justify text-white">
          Fitur Aduan memberikan pengguna kemampuan untuk memberi tahu
          administrator atau pemilik platform tentang konten yang dianggap tidak
          pantas, melanggar pedoman komunitas, atau mungkin menyebarkan
          informasi palsu atau merugikan. Dengan fitur ini, pengguna dapat
          melaporkan berita atau konten yang mereka yakini perlu ditinjau lebih
          lanjut atau dihapus dari platform, sehingga membantu menjaga
          integritas, keamanan, dan kualitas konten yang tersedia bagi pengguna
          lainnya. Laporan yang diterima kemudian dapat ditinjau oleh tim
          moderator atau administrator untuk mengambil tindakan yang sesuai
          sesuai dengan kebijakan platform tersebut.
        </p>
        <div className="hidden lg:block relative w-full mt-[60px]">
          <div className="items-center text-center">
            <button
              onClick={() => navigate("/Form")}
              className="btn-laporkan rounded-[9px] w-[179px] h-[55px] font-bold text-white justify-center"
            >
              Laporkan Berita
            </button>
          </div>
        </div>
      </div>
      <div className="laporkan" data-aos="fade-left" data-aos-delay="200">
        <img className="" alt="" src={imgcasual} />
      </div>
    </div>
  );
}
