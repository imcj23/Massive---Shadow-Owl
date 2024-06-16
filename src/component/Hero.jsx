import { useEffect } from "react";
import AOS from "aos";
import HomeImg from "../assets/image/casual.png";
import "../style/hero.css";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="flex justify-between mt-[150px] mx-[100px] mb-[100px]"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="w-[628px]">
        <h1 className="text-[64px] font-bold text-left text-white">
          Gerakan Jogja <br />
          Bebas <span className="span">Hoax</span>
        </h1>
        <p className="text-3xl font-medium mt-6 text-left text-white">
          Sebagai masyarakat, kita harus kritis menerima sebuah berita untuk
          mencegah terjadinya disinformasi ataupun hoax yang dapat merugikan
        </p>
      </div>
      <div className="image">
        <img alt="casual" src={HomeImg} width={464} />
      </div>
    </div>
  );
}
