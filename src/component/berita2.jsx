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

export default function Berita2() {
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
            <img src={Image3} alt="berita" className="berita1" />
          </div>
          <h1>
            Sesal Dosen UPN Jogja Pelaku Pelecehan yang Kini Dicopot dari Ketua
            Jurusan
          </h1>
          <p>
            Jogja - Oknum dosen Fakultas Teknologi Mineral UPN Veteran Jogja
            berinisial JS mengakui melakukan pelecehan terhadap mahasiswinya.
            Dia pun mengaku menyesali perbuatannya.
            <br />
            <br />
            "Saya sangat menyesali apa yang sudah saya lakukan dan memohon maaf
            dengan tulus kepada korban. Saya sungguh berharap bahwa korban dapat
            memulihkan kondisi dirinya dan kembali beraktivitas secara aman dan
            nyaman," ujar JS dalam suratnya seperti dikutip detikJogja dari akun
            medsos Instagram @satgasppksupnvy, Senin (6/5/2024).
            <br />
            <br />
            Dalam suratnya itu JS mengakui telah melakukan tindak kekerasan
            seksual terhadap korban. Apalagi perbuatan itu dia lakukan tanpa
            persetujuan korban. "Melalui surat ini saya mengakui telah melakukan
            tindak kekerasan seksual kepada korban yang identitasnya tidak
            disebutkan dalam surat ini untuk melindungi korban..." kata JS.
            <br />
            <br />
            Ada lima poin sanksi yang dijatuhkan UPN ke JS. Di antaranya adalah
            sanksi pencopotan dari Ketua Jurusan di Fakultas Teknologi Mineral
            dan juga skorsing mengajar. Berikut lima poin sanksi yang dijatuhkan
            UPN terhadap JS: <br />
            <br />
            1. Pemberhentian dari jabatan Ketua Jurusan dan tidak dapat
            diberikan tugas tambahan dan/atau jabatan struktural sampai dengan
            pensiun. <br />
            2. Menyatakan permohonan maaf secara tertulis yang dipublikasikan di
            internal kampus atau media massa Satgas PPKS UPNVY. <br />
            3. Diberhentikan sementara dari tugas sebagai dosen pada program
            sarjana selama 2 tahun. <br />
            4. Memberikan penggantian kerugianyang dialami oleh korban dengan
            difasilitasi oleh Satgas PPKS UPNVY; dan <br />
            5. Setelah menyelesaikan sanksi administratif, wajib mengikuti
            program konseling di lembaga yang ditunjuk oleh Satgas PPKS UPNVY
            dengan pembiayaan dibebankan pada saya sendiri sebelum kembali
            bekerja di UPNVY. Laporan hasil program konseling menjadi dasar bagi
            rektor untuk menerbitkan surat keterangan bahwa saya telah
            melaksanakan sanksi yang dikenakan dan dapat kembali berkegiatan
            secara penuh di UPN Veteran Yogyakarta.
            <br />
            <br />
            Saat dimintai konfirmasi, Sub-Koordinator Humas dan Kerjasama UPN
            Veteran Yogyakarta, Panji Dwi Ashrianto membenarkan isi surat JS
            tersebut. Panji menyebut surat pernyataan itu merupakan bukti
            penyelesaian kasus. <br />
            <br />
            "Surat tersebut benar adanya. Secara resmi memang diunggah di akun
            Satgas PPKS UPNYK sebagai tindak lanjut dari penyelesaian kasus
            tersebut," kata Panji saat dihubungi wartawan, Senin (6/5).
            <br />
            <br />
            "Terkait publikasi yang diunggah di akun media satgas PPKS, hal itu
            merupakan tuntutan korban," imbuhnya. Panji menyebut kasus ini sudah
            ditangani oleh Satgas PPKS UPN Veteran Jogja sesuai dengan aturan
            yang berlaku. "Untuk penanganan kasus sudah diselesaikan oleh satgas
            dan untuk antisipasi disesuaikan dengan tugas satgas dan mandat dari
            Permendikbud," tegasnya.
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
                  Pemerintah DIY Pastikan Ganti Pejabat Bupati Kulon Progo dan
                  Walikota Yogyakarta
                </h3>
                <Link to="/Berita">
                  <GoArrowRight className="mt-1 mr-3" />
                  <span>Selengkapnya</span>
                </Link>
              </div>
              <div className="berita-side">
                <img src={Image1} alt="berita1" className="img-side w-3/4" />
                <h3 className="mr-10">
                  Soal Latihan Silat Berujung Mahasiswanya Tewas, Instiper: Tak
                  Izin Kampus
                </h3>
                <Link to="/Berita1">
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
