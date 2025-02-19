import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-800 p-4 w-full top-0 left-0">
                <div className="flex flex-col md:flex-row w-full gap-4">
                    <div className="flex items-center justify-between md:hidden w-full">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-white z-50"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="flex flex-1 mx-2">
                            <div className="flex w-full items-center rounded-xl border bg-white border-gray-600 overflow-hidden">
                                <input 
                                    type="text" 
                                    placeholder="Cari barang..." 
                                    className="p-2 w-full outline-none text-black text-sm"
                                />
                                <button className="px-3 py-2 bg-amber-100">
                                    <svg 
                                        className="w-5 h-5 text-gray-600" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
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
                        </div>
                    </div>

                    <div className="hidden md:flex items-center w-full">
                        <div className="text-white font-bold pr-8 pl-10 text-2xl">
                            UMKM Desa Jubung
                        </div>
                        <div className="flex min-w-36 items-center rounded-xl border bg-white border-gray-600 overflow-hidden">
                            <input 
                                type="text" 
                                placeholder="Cari barang yang ingin dibeli..." 
                                className="p-2 w-96 outline-none text-black"
                            />
                            <button className="px-5 py-2 bg-amber-100">
                                <svg 
                                    className="w-6 h-6 text-gray-600" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
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
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div 
                    className="fixed inset-0  z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div 
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6">
                    <div className="text-white font-bold text-2xl mb-8">
                        UMKM Desa Jubung
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;