import { useState } from "react";
import axios from "axios";
import Brandimage from "../assets/image/laptop-login.png";
import Logo from "../assets/image/critizn2.png";
import { Link, useNavigate } from "react-router-dom";

import "../style/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login Berhasil, Klik Tombol 'Oke'");
      navigate("/Home");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <section>
      <div className="cover">
        <img src={Logo} alt="critizn" className="brand-logo" />
        <img src={Brandimage} alt="Image" className="image-cover" />
      </div>
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Masuk</h1>
          <div className="under-line"></div>
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="acception">
            <label htmlFor="">
              <input type="checkbox" />
              Terima Persetujuan
            </label>
          </div>

          <button className="btn" type="submit">
            Login
          </button>
          {/* <button
            onClick={() => navigate("/Home")}
            type="submit"
            className="btn"
          >
            login
          </button> */}

          <div className="under-line"></div>

          <div className="create">
            <Link to="/Forget">Lupa Password</Link>
            <Link to="/Register">Belum Punya Akun ?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
