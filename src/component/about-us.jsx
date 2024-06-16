import { useEffect } from "react";
import AOS from "aos";
import Casual from "../assets/image/3d-casual.png"
import Casual2 from "../assets/image/3d-casual2.png"
import "../style/about.css"
import "aos/dist/aos.css";

export default function About_us(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <section className="about-section" >
            <div className="first-content" data-aos="fade-up" data-aos-delay="200">
                <div className="content-item text-center text-white text-padding">
                    <h1 className="text-5xl font-bold mb-6">Tentang Kami</h1>
                    <p className="caption">Sebagai masyarakat, kita harus kritis dalam menerima sebuah berita untuk mencegah terjadi nya disinformasi ataupun hoax yang dapat merugikan</p>
                </div>
            </div>

            <div className="container-about" data-aos="fade-up" data-aos-delay="200">
                <div className="text-box">
                    <h2><span>Misi</span> Kami</h2>
                    <p>Memerangi penyebaran informasi palsu dan memberikan wawasan yang jelas tentang isu-isu terkini di Yogyakarta. <br /><br /> Kami memahami betapa pentingnya kebenaran dalam era digital ini, di mana hoaks dapat dengan cepat menyebar dan memengaruhi pandangan publik.</p>
                </div>
                <div>
                    <div className="bg-round-1"></div>
                    <img src={Casual} alt="" className="image-1"/>
                </div>
            </div>

            <div className="container-about" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <div className="bg-round-2"></div>
                    <img src={Casual2} alt="casual2" className="image-2" />
                </div>
                <div className="text-box">
                    <h2><span>Tujuan</span> Kami</h2>
                    <p>
                        Tujuan utama critizn adalah menjadi sumber terpercaya yang 
                        membantu masyarakat yogyakarta membedakan antara informasi yang
                        benar dan hoaks.
                    </p>
                    <p>
                        Kami berkomitmen untuk
                        <ol>
                            <li>Menyediakan Berita faktual</li>
                            <li>Memerangi hoaks</li>
                            <li>mendorong literasi media</li>
                            <li>mendukung kebenaran dan keadilan</li>
                        </ol><br />
                        dengan tujuan  ini, kami berharap dapat berkontribusi secara positif
                        dalam membangun lingkungan informasi yang sehat dan bertanggung jawab
                        di Yogyakarta.
                    </p>
                </div>
            </div>
        </section>
    )
}