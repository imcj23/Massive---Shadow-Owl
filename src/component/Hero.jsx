import HomeImg from "../assets/image/casual.png"
// import SearchIcon from "../assets/image/search.png"
import "../style/hero.css"

export default function Hero() {
  return (
    <section className="section">
        <div className="w-[628px]">
            <h1 className="text-[64px] font-bold text-left">Gerakan Jogja <br/>Bebas <span className="text-secondary">Hoax</span></h1>
            <p className="text-3xl font-medium mt-6 text-left">Sebagai masyarakat, kita harus kritis menerima sebuah berita untuk mencegah terjadinya disinformasi ataupun hoax  yang dapat merugikan</p>
            <div className="hidden lg:block relative w-full mt-[60px]">
                {/* <div className="flex items-center absolute inset-y-0 right-2">
                    <button type="submit" className=" text-gray-600 rounded-full p-2">
                        <img src={SearchIcon} alt="Search" className="w-6 h-6" />
                    </button>
                </div> */}
                {/* <input
                    type="text"
                    placeholder="Cari berita"
                    className="p-4 pl-6 border border-gray w-full bg-fourth outline-none rounded-[15px]"
                /> */}
            </div>
        </div>
        <div>
            <img alt="casual" src={HomeImg} width={464}/>
        </div>
    </section>
  )
}

// flex justify-between mt-[100px] mx-[100px]