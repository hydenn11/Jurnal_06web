function labelHarga(nilai) {
    return (
        <div className="LabelHarga">
            <p>Rp. {nilai.toLocaleString('id-ID')}</p>
        </div>
    )
}

export default labelHarga;