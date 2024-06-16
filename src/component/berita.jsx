// import { useEffect } from "react";
import Image1 from "../assets/image/berita1.png";
import Image2 from "../assets/image/berita2.png";
import Image3 from "../assets/image/berita3.png";
import Image4 from "../assets/image/berita4.png";
import Image5 from "../assets/image/berita5.png";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../style/berita.css";

export default function Berita() {

  return (
    <section className="Page">
      <div className="grid grid-cols-3 gap-3">
        <div className="container1 col-span-2 px-8 py-9">
          <h1 className="berita-news ">Berita / News</h1>
          <div className="tagline">
            <div className="under-line"></div>
            <p>kamis, 5 Mei 2024</p>
            <h2>Wisata Seto Pangaribowo, Reni Susanti</h2>
            <p>Tim Redaksi</p>
          </div>
          <div className="img-berita">
            <img src={Image1} alt="berita" className="berita1" />
          </div>
          <h1>
            Pemerintah DIY Pastikan Ganti Pejabat Bupati Kulon Progo dan
            Walikota Yogyakarta
          </h1>
          <p>
            YOGYAKARTA, Pemerintah Daerah Istimewa Yogyakarta (DIY) memastikan
            bakal mengganti dua penjabat (pj) Bupati Kulon Progo dan pj Wali
            Kota Yogyakarta. Sekretaris Daerah DIY, Beny Suharsono mengatakan,
            menjelang 22 Mei 2024, Pemerintah DIY telah memproses tahapan
            penggantian pj di dua wilayah tersebut. <br />
            <br />
            “Kita sudah mengevaluasi baik kota (Yogyakarta) maupun Kulon Progo,
            secara administrasi juga sudah bersurat ke Mendagri untuk
            mendapatkan arahan tentang penyegaran baik di kota maupun Kulon
            Progo,” jelas Beny, Sabtu (4/5/2024). <br />
            <br />
            Beny mengungkapkan, untuk Kulon Progo sudah jelas disampaikan
            Gubernur Daerah Istimewa Yogyakarta (DIY) pada saat acara syawalan
            bahwa posisi pj akan diganti. Sedangkan di Kota Yogyakarta, salah
            satu yang menjadi bahan evaluasi adalah sekelompok masyarakat
            mempertanyakan kenapa banyak gambar pj wali kota menjelang Idul
            Fitri kemarin. Hal ini mengundang banyak spekulasi bahwa pj Wali
            Kota Yogyakarta akan maju dalam kontestasi Pilkada Kota Yogyakarta
            2024. <br />
            <br />
            “Begitu juga kota (Yogyakarta), selama ini kan ramai baliho dan
            sebagainya ya itu jadi bagian evaluasi kalau itu benar-benar terjadi
            gambar-gambar dan sebagainya kita akan evaluasi supaya benar-benar
            netral,” jelas Beny. “Kemarin pemilu saja berusaha netral kok
            apalagi untuk skup yang lebih kecil kita jaga ASN jangan di bawa ke
            sana kemari,” beber Beny. <br />
            <br />
            Dia menambahkan, saat ini Pemerintah DIY telah mengirimkan 3 nama
            kepada Kementerian Dalam Negeri untuk menggantikan dua penjabat
            tersebut. Saat ini Pemerintah dIY sedang menunggu arahan dari
            Kemendagri. “Sudah dikirim (ke Kemendagri) tinggal menunggu arahan,
            kita tidak bisa mendahului, harus ada 3 nama tidak boleh tunggal
            datanya semua lengkap baik di Kulon Progo maupun kota (Yogyakarta).
          </p>
          {/* onSubmit={handleSubmit} */}
          {/* value={text} 
                onChange={(e) => setText(e.target.value)}  */}
          <form className="form-coment">
            <div className="user">
              <FaUser className="h-8 w-6" />
            </div>
            <input placeholder="Tambahkan Komentar ....." required />
            <button type="submit" className="">
              <FaPaperPlane className="h-8 w-5 mt-4" />
            </button>
          </form>
          <div className="under-line mt-3 ml-16"></div>
        </div>
        <div className="side-bar">
          <div className="kategori-berita">
            <div className="kategori-inline">
              <div className="line-h2"></div>
              <div className="height-line">
                <h2>Kategori Berita</h2>
              </div>
            </div>
            <ul>
              <li>
                <SlArrowRight />
                <Link to=""> Berita Hoax</Link>
              </li>
              <li>
                <SlArrowRight />
                <Link to=""> Disinformasi</Link>
              </li>
            </ul>
          </div>
          <div className="berita-populer">
            <div className="">
              <div className="kategori-inline">
                <div className="line-h2"></div>
                <div className="height-line">
                  <h2>Terpopuler</h2>
                </div>
              </div>
            </div>
            <div className="terpopuler">
              <div className="berita-side">
                <img src={Image2} alt="berita1" className="img-side w-3/4" />
                <h3 className="mr-10">
                  Soal latihan silat berujung mahasiswanya tewas, intiper:Tak
                  izin kampus
                </h3>
                <Link to="/Berita1">
                  <GoArrowRight className="mt-1 mr-3" />
                  <span>Selengkapnya</span>
                </Link>
              </div>
              <div className="berita-side">
                <img src={Image3} alt="berita1" className="img-side w-3/4" />
                <h3 className="mr-10">
                  Sesal dosen UPN Jogja pelaku pelecehan yang kini dicopot dari
                  ketua jurusan
                </h3>
                <Link to="/Berita2">
                  <GoArrowRight className="mt-1 mr-3" />
                  <span>Selengkapnya</span>
                </Link>
              </div>
              <div className="berita-side">
                <img src={Image4} alt="berita1" className="img-side" />
                <h3 className="mr-10">
                  Kelihatan cahaya hijau di langit jogja yang ternyata meteor
                </h3>
                <Link to="/Berita3">
                  <GoArrowRight className="mt-1 mr-3" />
                  <span>Selengkapnya</span>
                </Link>
              </div>
              <div className="berita-side">
                <img src={Image5} alt="berita1" className="img-side" />
                <h3 className="mr-10">
                  ingatkan wajib belajar 12 tahun, sultan HB X minta anak
                  perempuan tak diberlakukan
                </h3>
                <Link to="/Berita4">
                  <GoArrowRight className="mt-1 mr-3" />
                  <span>Selengkapnya</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="kategori-inline">
            <div className="line-h2"></div>
            <div className="height-line">
              <h2>Komentar</h2>
            </div>
            </div>
            <div className="record-comment">
              <div className="user-coment">
                <FaUser className="h-6 w-4" />
              </div>
              <div className="isi-coment">
                <h4>@Username1</h4>
                <p>harusnya saya yang walikota</p>
              </div>
          </div>
            <div className="record-comment my-8">
              <div className="user-coment">
                <FaUser className="h-6 w-4" />
              </div>
              <div className="isi-coment">
                <h4>@Username2</h4>
                <p>info orang dalam jadi Bupati</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
