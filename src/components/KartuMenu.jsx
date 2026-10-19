import LabelHarga from "./LabelHarga";

function KartuMenu({ 
    nama, 
    harga, 
    kategori="Makanan"
}) {
  return (
    <div className="KartuMenu">
        <h2>{nama}</h2>
        <p>{kategori}</p>
        <LabelHarga nilai={harga} />
    </div>
  )
}

export default KartuMenu;