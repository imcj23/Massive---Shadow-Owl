import Brandimage from "../assets/image/laptop-login.png";
import Logo from "../assets/image/critizn2.png";
import { Link } from "react-router-dom";
import "../style/forget.css";
// import React, { useEffect } from "react";

export default function Forget() {
  return (
    <section>
        <div className="cover2">
            <img src={Logo} alt="brand-logo" className="brand-logo"/>
            <img src={Brandimage} alt="img-cover" className="image-cover"/>
        </div>
        <div className="wrapper2">
            <form action="">
            <h1>Lupa Password</h1>
            <div className="under-line"></div>
            <div className="input-box">
                <label htmlFor="">Masukan Email</label>
                <input type="email" placeholder="Masukkan Email" required/>
            </div>

            <button type="submit" className="btn">Submit</button>

            <div className="under-line"></div>

            <div className="create">
             <Link to="/">Kembali</Link>
            </div>
         </form>
        </div>
    </section>
  );
}
