import React, { useState } from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 w-full top-0 left-0 flex items-center">
            <div className="text-white font-bold pr-8 pl-10 text-2xl">
                UMKM Desa Jubung
            </div>
            <div className="flex min-w-36 items-center rounded-xl border bg-white border-gray-600 overflow-hidden ">
                <input 
                    type="text" 
                    placeholder="Cari barang yang ingin dibeli..." 
                    className="p-2 w-96 outline-none text-black"
                />
                <button className="px-5 py-2 bg-amber-100">
                    <svg 
                        className="w-6 h-6 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;