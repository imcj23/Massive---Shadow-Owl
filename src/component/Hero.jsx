import HomeImg from "../assets/image/casual.png"
import "../style/hero.css"

export default function Hero() {
  return (
        <div className="flex justify-between mt-[100px] mx-[100px] text-white">
            <div className="w-[628px]">
                <h1 className="text-[64px] font-bold text-left">Gerakan Jogja <br/>Bebas <span className="text-secondary">Hoax</span></h1>
                <p className="text-3xl font-normal mt-6 text-left">Sebagai masyarakat, kita harus kritis menerima sebuah berita untuk mencegah terjadinya disinformasi ataupun hoax  yang dapat merugikan</p>
            </div>
            <div className="image">
                <img alt="casual" src={HomeImg} width={464}/>
            </div>
        </div>

  )
}


// import HomeImg from "../assets/image/casual.png"
// // import SearchIcon from "../assets/image/search.png"

// export default function Hero() {
//   return (
//     <section className="grid grid-cols-3 gap-3 px-8">
//         <div className="col-span-2">
//             <h1 className="text-[64px] font-bold text-left">Gerakan Jogja <br/>Bebas <span className="text-secondary    ">Hoax</span></h1>
//             <p className="text-3xl font-light mt-6 text-left">Sebagai masyarakat, kita harus kritis <br /> menerima sebuah berita untuk <br /> mencegah terjadinya disinformasi <br /> ataupun hoax  yang dapat merugikan</p>
            
//             {/* <div className="hidden lg:block relative w-full mt-[60px]">   
//             </div> */}
//         </div>
//         <div className="image">
//             <img alt="casual" src={HomeImg} width={464}/>
//         </div>
//     </section>
//   )
// }

// flex justify-between mt-[100px] mx-[100px]
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