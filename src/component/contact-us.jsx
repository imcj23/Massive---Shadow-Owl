import { useEffect } from "react";
import AOS from "aos";
import Icon from "../assets/image/icon.png";
import "../style/contact.css";
import "aos/dist/aos.css";
import { FaPhone, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact_us() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="section">
      <div className="first-content" data-aos="fade-up" data-aos-delay="">
        <div className="content-item text-center text-white text-padding">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="200">Informasi Kontak</h1>
          <p data-aos="fade-up" data-aos-delay="500">Hubungi Kami untuk menyelesaikan. <br />kendala yang anda alami.</p>
          <button className="btn-orange px-4 py-2 mt-11 rounded-md shadow-lg" data-aos="fade-up" data-aos-delay="800">
            Hubungi Kami
          </button>
        </div>
      </div>

      <div className="second-content flex justify-center items-start py-10">
        <div className="relative flex justify-center items-start mb-10">
          <div className="flex info-padding flex-col space-y-4" data-aos="fade-right" data-aos-delay="500">
            <div className="info-box flex items-center p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="icon-container p-4 rounded-full">
                  <FaPhone />
                </div>
                <div className="text-white">
                  <p className="font-bold text-xl">Nomor Telepon</p>
                  <p className="text-lg">+62 812-8983-102</p>
                </div>
              </div>
            </div>
            <div className="info-box flex items-center p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="icon-container p-4 rounded-full">
                  <FaEnvelope />
                </div>
                <div className="text-white">
                  <p className="font-bold text-xl">Alamat Email</p>
                  <p className="text-lg">ppidkotajogja@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="info-box flex items-center p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="icon-container p-4 rounded-full">
                  <FaInstagram />
                </div>
                <div className="text-white">
                  <p className="font-bold text-xl">Instagram</p>
                  <p className="text-lg">@ppidpemdadiy </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-6 self-start" data-aos="fade-left" data-aos-delay="500">
            <img src={Icon} alt="Image" className=" w-76 h-76 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
