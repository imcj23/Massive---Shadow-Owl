import { useEffect } from "react";
import AOS from "aos";
import image1 from "../assets/image/1.png";
import image2 from "../assets/image/2.png";
import image3 from "../assets/image/3.png";
import image4 from "../assets/image/nenek.png";
import image5 from "../assets/image/4.png";
import image6 from "../assets/image/5.png";
import image7 from "../assets/image/6.png";
import image8 from "../assets/image/7.png";
import "../style/content.css";
import "aos/dist/aos.css";

export default function Content() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-[40px] font-bold text-left text-white mb-10"
        data-aos="fade-up"
      >
        Postingan <span>Terbaru</span>{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div
          className="card rounded-b-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="">
            <img className="w-[100%]" src={image1} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold text-xl mb-5">
              Pemerintah DIY Pastikan Ganti Pejabat Bupati
            </h1>
          </a>
        </div>
        <div
          className="card rounded-b-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="">
            <img className="w-[100%] h-[57%]" src={image2} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold text-lg mb-5">
              Soal Latihan Silat Berujung Mahasiswanya Tewas, Instiper: Tak Izin
              Kampus
            </h1>
          </a>
        </div>
        <div
          className="card rounded-b-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="">
            <img className="w-[100%] h-[57%]" src={image3} alt="" />
            <h1 className="ml-8 py-4 mt-[14px] mx-5 font-bold text-lg mb-5">
              Sesal Dosen UPN Jogja Pelaku Pelecehan yang Kini Dicopot dari
              Ketua Jurusan
            </h1>
          </a>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <img
          className="rounded-md"
          src={image4}
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <div className="grid grid-cols-2 gap-8">
          <div className="card2" data-aos="fade-left" data-aos-delay="500">
            <img className="rounded-b-lg w-[100%]" src={image5} alt="" />
            <h1 className="ml-4 mt-[14px] font-bold text-[14px]">
              Peluncuran Program Pelatihan Literasi Digital bagi Orang Tua di
              DIY
            </h1>
          </div>
          <div className="card2" data-aos="fade-left" data-aos-delay="500">
            <img className="rounded-b-lg w-[100%]" src={image6} alt="" />
            <h1 className="ml-4 mt-[14px] mx-5 font-bold text-[14px]">
              Peluncuran Aplikasi Pendeteksi Hoaks Berbasis Blockchain oleh
              Startup Lokal DIY
            </h1>
          </div>
          <div className="card2" data-aos="fade-left" data-aos-delay="500">
            <img className="rounded-b-lg w-[100%]" src={image7} alt="" />
            <h1 className="ml-4 mt-[14px] mx-5 font-bold text-[14px]">
              Edukasi Anak-Anak Tentang Pentingnya Memeriksa Informasi
            </h1>
          </div>
          <div className="card2" data-aos="fade-left" data-aos-delay="500">
            <img className="rounded-b-lg w-[100%]" src={image8} alt="" />
            <h1 className="ml-4 mt-[14px] mx-5 font-bold text-[14px]">
              Penyuluhan Literasi Digital di Komunitas Adat DIY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
