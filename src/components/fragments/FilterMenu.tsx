import { useState } from "react";
import filter from "../../assets/filter.png";

interface FilterMenuProps {
    onClose: () => void;
 }
 
 const FilterMenu = ({ onClose }: FilterMenuProps) => {
    const [sort, setSort] = useState("terbaru");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
 
    const handleClear = () => {
        setSort("terbaru");
        setMinPrice("");
        setMaxPrice("");
    };
 
    return (
        <div className="fixed md:relative top-0 left-0 h-screen bg-white p-6 w-3/4 md:w-3/4">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <img src={filter} alt="Filter Icon" className="w-6 h-6" />
                    <p className="text-xl font-bold text-gray-900">FILTER</p>
                </div>
                <button 
                    className="md:hidden text-gray-500 text-2xl"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-2">Sortir</label>
                <select 
                    className="w-full p-2 border border-gray-400 rounded-lg text-gray-800"
                    value={sort} 
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="terbaru">Terbaru</option>
                    <option value="terlama">Terlama</option>
                    <option value="termurah">Termurah</option>
                    <option value="termahal">Termahal</option>
                </select>
            </div>
 
            <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-2">Batas Harga</label>
                <div className="flex space-x-2">
                    <input 
                        type="number" 
                        placeholder="Min" 
                        className="w-1/2 p-2 border border-gray-400 rounded-lg text-gray-800"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Max" 
                        className="w-1/2 p-2 border border-gray-400 rounded-lg text-gray-800"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
 
            <button 
                onClick={handleClear} 
                className="w-full bg-gray-800 text-white p-2 rounded-lg mt-4 hover:bg-gray-700 transition"
            >
                Clear Filter
            </button>
        </div>
    );
 };
 
 export default FilterMenu;