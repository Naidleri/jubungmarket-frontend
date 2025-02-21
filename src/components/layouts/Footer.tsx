
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 md:p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
                <div className="w-24 md:w-32">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Lambang-kabupaten-jember.png"
                        alt="Logo" 
                        className="w-full h-full object-cover bg-gray-200 rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold mb-2">KATEGORI POPULER</h3>
                    <div className="flex flex-col gap-1 text-sm">
                        <a href="#" className="transition">Perkebunan</a>
                        <a href="#" className="transition">Makanan</a>
                        <a href="#" className="transition">Minuman</a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold mb-2">PENCARIAN POPULER</h3>
                    <div className="flex flex-col gap-1 text-sm">
                        <a href="#" className="transition">Kopi</a>
                        <a href="#" className="transition">Biji Jagung</a>
                        <a href="#" className="transition">Beras</a>
                    </div>
                </div>
                <div className="md:hidden w-full text-center mt-6">
                    <h2 className="text-lg font-bold">Platform Beli UMKM Desa Jubung</h2>
                </div>
            </div>
            <div className="hidden md:block text-right mt-6">
                <h2 className="text-lg font-bold">Platform Beli UMKM Desa Jubung</h2>
            </div>
        </footer>
    );
 };
 
 export default Footer;