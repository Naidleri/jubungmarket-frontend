import React from 'react';

interface CardProdukProps {
    foto: string;
    harga: string;
    namaProduk: string;
    penjual: string;
}

const CardProduk: React.FC<CardProdukProps> = ({ foto, harga, namaProduk, penjual }) => {
    return (
        <div className="card-produk border w-fit border-neutral-300 rounded-md">
            <img src={foto} alt={namaProduk} className="card-produk-foto p-3 w-50 h-60 rounded-2xl" />
            <div className="card-produk-info px-3">
                <p className="card-produk-harga text-black font-bold text-2xl">{harga}</p>
                <h2 className="card-produk-nama text-black text-xl">{namaProduk}</h2>
                <small className="card-produk-penjual text-black text-xs from-neutral-600">{penjual}</small>
            </div>
        </div>
    );
};

export default CardProduk;