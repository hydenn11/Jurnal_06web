import Panel from "./components/Panel";
import KartuMenu from "./components/KartuMenu";

const Nama = 'Kantin Luthfi'
const N = 37
const gayajudul = {
  color: "#1fa35f",
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

      <Panel judul="Menu Hari Ini">
        <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (N *100)} />
        <KartuMenu nama="Es Teh Lemon" harga={10000 + (N *100)} />
        <KartuMenu nama="Nasi Goreng Telur" harga={10000 + (N *100)} />
      </Panel>
    </>
  )
}

export default App;