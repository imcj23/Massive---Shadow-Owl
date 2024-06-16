import { useEffect } from "react";
import AOS from "aos";
import image1 from "../assets/image/step-1.png";
import image2 from "../assets/image/step-2.png";
import image3 from "../assets/image/step-3.png";
import "../style/step.css";
import "aos/dist/aos.css";

export default function Step() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mx-16 mt-28">
      <div className="text-step">
        <h1 className="w-[550px]" data-aos="fade-right">
          3 Cara Melaporkan <span>Hoax</span>
        </h1>
        <p className="w-[650px]" data-aos="fade-left">
          Gunakan langkah berikut dalam upaya mencegah beredarnya berita hoax
          semakin marak dalam kehidupan bermasyarakat
        </p>
      </div>
      
      <div className="container mx-auto my-8 p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
        <div className="card-step" data-aos="fade-left" data-aos-delay="">
            <img className="w-[50%]" src={image1} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold mb-5 text-2xl">
            Salin halaman url berita Hoax yang anda temukan 
            </h1>
        </div>
        <div className="card-step" data-aos="fade-left" data-aos-delay="200">
            <img className="w-[50%]" src={image2} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold text-xl mb-5">
            Buka website Critizen.com lalu klik aduan 
            </h1>
        </div>
        <div className="card-step" data-aos="fade-left" data-aos-delay="400">
            <img className="w-[40%]" src={image3} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold text-xl mb-5">
                Menuju halaman whatsapp ke nomor PPID D.I. Yogyakarta
            </h1>
        </div>
      </div>
      </div>
    </div>
  );
}
