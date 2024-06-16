// import React from "react";
// import { useState } from "react";
// import axios from "axios";
import "../style/form.css";

export default function Form() {
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert('berhasil dilaporkan')
  }
  // const [email_aduan, setEmail_aduan] = useState("");
  // const [judul_aduan, setjudul_aduan] = useState("");
  // const [url_aduan, setUrl_aduan] = useState("");
  // const [deskripsi_aduan, setDeskripsi_aduan] = useState("");

  // const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post('http://localhost:8000/api/aduan', {
    //     email_aduan, judul_aduan, url_aduan, deskripsi_aduan,
    //   });
    //   alert(response.data);
    //   setEmail_aduan('');
    //   setjudul_aduan('');
    //   setUrl_aduan('');
    //   setDeskripsi_aduan('');
    // } catch (error) {
    //   console.error(error);
    // }
  ;
  return (
    <div className="content-container flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Laporkan Berita Hoax di Sekitarmu, Yuk
      </h1>
      <div className="content p-8 rounded-lg shadow-lg w full max-w-lg">
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              // value={email_aduan} onChange={(e) => setEmail_aduan(e.target.value)}
              className="input-field w-full p-2 border-gray-300 rounded-md" required
            />
          </div>
          <div>
            <label htmlFor="Judul" className="block text-white">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              // value={judul_aduan} onChange={(e) => setjudul_aduan(e.target.value)}
              className="input-field w-full p-2 border-gray-300 rounded-md" required
            />
          </div>
          <div>
            <label htmlFor="view" className="block text-white">
              Link Atau URL
            </label>
            <input
              type="url"
              id="url"
              // name="url" value={url_aduan} onChange={(e) =>setUrl_aduan(e.target.value)}
              className="input-field w-full p-2 border-gray-300 rounded-md" required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">
              Deskripsi
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              // value={deskripsi_aduan} onChange={(e) => setDeskripsi_aduan(e.target.value)}
              className="input-field w-full p-2 border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-center mt-7">
            <button className="btn-orange text-white px-10 py-3 rounded-md shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
