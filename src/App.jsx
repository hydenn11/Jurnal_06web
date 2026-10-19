import { useState } from "react";
import './App.css';

const Nama = 'Kantin Luthfi'
//const jam = new Date().getHours();
const N = 37
const gayajudul = {
  color: "#1fa35f",
  textAlign: "center",
  fontSize: "28px"
}


function App() {
  const Jam = 9

  return(
    <>
      <h1 className='Kantin' style={gayajudul}>{Nama}</h1>
      <p>{Jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>Saldo awal kartu Kantin: Rp.{N * 1000}</p>
      <button disabled>Bayar</button>
    </>
  )
}

export default App;