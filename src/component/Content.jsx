import image1 from "../assets/image/1.png"
import image2 from "../assets/image/2.png"
import image3 from "../assets/image/3.png"
import image4 from "../assets/image/nenek.png"
import image5 from "../assets/image/4.png"
import image6 from "../assets/image/5.png"
import image7 from "../assets/image/6.png"
import image8 from "../assets/image/7.png"

export default function Content() {
  return (
    <div className="ml-[91px] mt-[115px]">
      <h1 className="text-[40px] font-bold text-center">Postingan Terbaru</h1>
      <div className="grid grid-cols-3 gap-16 mr-[98px]">
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg w-[374px] h-[162px]" src={image1} alt="" />
            <h1 className="ml-8 mt-[14px] mx-5 font-bold">Edukasi Anak-anak tentang Pentingnya Memeriksa Informasi</h1>
        </div>
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg  w-[374px] h-[162px]" src={image2} alt="" />
            <h1 className="ml-8 mt-[14px] mx-5 font-bold">Diskusi Publik: Mitigasi Dampak Psikologis Akibat Penyebaran Hoaks</h1>
        </div>
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg w-[374px] h-[162px]" src={image3} alt="" />
            <h1 className="ml-8 mt-[14px] mx-5 font-bold">Startup Lokal DIY Berhasil Mengembangkan Algoritma Anti-Hoaks</h1>
        </div>
      </div>
        <div className="flex gap-9">
            <img className="rounded-md"src={image4}/>
            <div className="grid grid-cols-2 gap-16 mr-[98px]">
              <div className="shadow-md w-full h-[215px] rounded-md ">
                <img className="rounded-t-lg w-[258px] h-[128px]" src={image5} alt="" />
                <h1 className="ml-8 mt-[14px] font-bold text-[14px]">Peluncuran Program Pelatihan Literasi Digital bagi Orang Tua di DIY</h1>
              </div>  
              <div className="shadow-md w-full h-[215px] rounded-md ">
                <img className="rounded-t-lg w-[258px] h-[128px]" src={image6} alt="" />
                <h1 className="ml-8 mt-[14px] mx-5 font-bold text-[14px]">Peluncuran Aplikasi Pendeteksi Hoaks Berbasis Blockchain oleh Startup Lokal DIY</h1>
              </div>
              <div className="shadow-md w-[256px] h-[215px] rounded-md ">
                <img className="rounded-t-lg w-[258px] h-[128px]" src={image7} alt="" />
                <h1 className="ml-8 mt-[14px] mx-5 font-bold text-[14px]">Edukasi Anak-Anak Tentang Pentingnya Memeriksa Informasi</h1>
              </div>
              <div className="shadow-md w-[258px] h-[215px] rounded-md ">
                <img className="rounded-t-lg w-[258px] h-[128px]" src={image8} alt="" />
                <h1 className="ml-8 mt-[14px] mx-5 font-bold text-[14px]">Penyuluhan Literasi Digital di Komunitas Adat DIY</h1>
              </div>
            </div>
               
        </div>  
    </div>

  )
}


