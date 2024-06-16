import { useState } from "react";
import axios from "axios";
import Brandimage from "../assets/image/laptop-login.png";
import Logo from "../assets/image/critizn2.png";
import { Link } from "react-router-dom";
import "../style/register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {email, username, password,});
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <section>
      <div className="cover1">
        <img src={Logo} alt="critizn" />
        <img src={Brandimage} alt="brand" />
      </div>
      <div className="wrapper1">
        <form onSubmit={handleRegister}>
          <h1>Buat Akun</h1>
          <div className="under-line"></div>
          <div className="input-box">
            <label htmlFor="">Masukan Email</label>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Masukan Username</label>
            <br />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Masukan Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn">
            Daftar Akun
          </button>

          <div className="under-line"></div>

          <div className="create">
            <Link to="/">Sudah Punya Akun ?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
