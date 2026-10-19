import LabelHarga from "./LabelHarga";

function KartuMenu({ 
    nama, 
    harga, 
    kategori 
}) {
  return (
    <div className="KartuMenu">
        <h2>{nama}</h2>
        <p>{kategori}</p>
        <LabelHarga nilai={harga} />
    </div>

  )
}