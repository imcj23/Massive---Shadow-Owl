import Image1 from "../assets/image/berita2.png";
import Image2 from "../assets/image/berita1.png";
import Image3 from "../assets/image/berita3.png";
import Image4 from "../assets/image/berita4.png";
import Image5 from "../assets/image/berita5.png";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../style/berita.css";

export default function Berita1() {
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
            Soal Latihan Silat Berujung Mahasiswanya Tewas, Instiper: Tak Izin
            Kampus
          </h1>
          <p>
            Sleman - Seorang mahasiswa Institut Pertanian Stiper (Instiper)
            Jogja berinisial IKK tewas usai latihan silat pekan lalu. Instiper
            menegaskan latihan silat itu tidak ada izin pihak kampus. Wakil
            Rektor Instiper Bidang Kemahasiswaan dan Alumni, Dr Ir Adi Ruswanto
            menjelaskan, dari hasil penelusuran kampus dipastikan bahwa kegiatan
            silat yang diikuti korban bukan termasuk dalam Unit Kegiatan
            Mahasiswa (UKM) resmi kampus. Sementara korban, kata Adi, tercatat
            sebagai anggota UKMI (Unit Kegiatan Mahasiswa Islam). <br /><br />

            "Yang bersangkutan menggeluti namanya UKMI, Unit Kegiatan Mahasiswa Islam.
            Nah itu kok latihannya pencak silat, ternyata dia mengikuti pencak
            silat yang di luar formal Instiper," kata Adi saat dihubungi
            wartawan, Senin (6/5/2024). "Tidak pernah izin ke kampus, selama
            saya jadi Warek tidak pernah dimintai izin ke kampus karena itu kan
            kegiatan non-formal," ujarnya. <br /><br /> 
            
            Dia pun tidak mengetahui secara pasti sudah berapa lama paguyuban silat itu telah menggunakan area kampus
            sebagai lokasi latihan. Namun, dia menduga kegiatan tersebut sudah
            berlangsung sejak lama."Kelihatannya ya iya (sudah sejak lama ada).
            Karena saya juga nggak tahu, namanya non-formal tahu-tahu ada
            kejadian ini kita baru tahu," ucapnya. Disebutkannya, korban
            merupakan mahasiswa semester 2 Prodi Agroteknologi Fakultas
            Pertanian. Di sisi lain, pihak kampus juga akan memastikan kembali
            identitas pelaku. Apakah benar mahasiswa Instiper atau bukan.
            "(Korban) Mahasiswa Instiper. Ini tadi saya juga koordinasi dengan
            kampus, saya minta ada tim yang ke orang tua maupun ke Polresta
            Sleman untuk meyakinkan yang ditahan itu mahasiswa kita atau bukan.
            Kan kita baru tahu tersangka dari berita," ujarnya. <br /><br /> 

            Atas kejadian ini, kampus menegaskan akan mendukung semua proses hukum. "Kita
            dukung langkah hukumnya apa pun yang dibutuhkan kita siap support
            membantu," ujarnya. <br /><br />
            
            Sementara di sisi internal kampus, pihaknya akan
            lebih sering untuk memantau semua kegiatan mahasiswa. Kampus tidak
            ingin kecolongan dan kejadian serupa terulang kembali. <br /><br /> 

            "Kemudian langkah ke depan tentunya namanya kegiatan kemahasiswaan yang di
            kampus harus dipantau lebih rutin, detail dan kemarin saya juga
            sudah menghubungi BEM kami atas informasi yang ada itu supaya
            kegiatan di kampus itu maksimal setengah 10 sampai jam 10 (malam),"
            pungkasnya. <br /><br />
            
            Sebelumnya diberitakan, korban dilarikan ke rumah sakit
            usai mengikuti latihan silat Sabtu (28/4). Kemudian pada Rabu (1/5),
            korban dinyatakan meninggal. Dari pemeriksaan di rumah sakit, korban
            mengalami luka di organ dalam. Polisi kemudian melakukan pemeriksaan
            dan memanggil sejumlah saksi. Seorang pria inisial AF (23) lantas
            menyerahkan diri ke polisi pada malam harinya. Kasat Reskrim
            Polresta Sleman, AKP Riski Adrian menerangkan AF yang merupakan
            warga Sumatera Barat sudah ditetapkan sebagai tersangka. "Sudah
            (jadi tersangka, red), dan sudah kita tahan," kata Riski, Jumat
            (3/5).
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
                <img src={Image2} alt="berita1" className="img-side w-3/4"/>
                <h3 className="mr-10">
                Pemerintah DIY Pastikan Ganti Pejabat Bupati Kulon Progo dan Walikota Yogyakarta
                </h3>
                <Link to="/Berita">
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
