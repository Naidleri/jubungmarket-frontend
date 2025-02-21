import { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import FilterSelect from '../components/fragments/FilterSelect';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className="relative w-full h-120 aspect-square border-b border-neutral-400">
                <img 
                    src={images[currentIndex]} 
                    alt={`Product ${currentIndex + 1}`} 
                    className="w-full h-full object-cover"
                />

                <button 
                    onClick={prevImage}
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white"
                >
                    ‹
                </button>
                <button 
                    onClick={nextImage}
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white"
                >
                    ›
                </button>
            </div>
            <div className="relative">
                <div className="flex gap-2 p-5 overflow-x-auto scrollbar-hide border-b border-neutral-400">
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                            className={`min-w-[100px] h-[100px] object-cover cursor-pointer 
                                ${currentIndex === index ? 'border-2 border-blue-800' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

function DetailPage() {
    const images = [
        "https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/477708071_1174229227476890_7849054427177095112_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHRZ2ifyYT72AfflFbk7tyfEzyhjp1jJCoTPKGOnWMkKjHhUS5gcdqrK04zkMf8BRv3fy1R6Yk5pNCcuUDuaEqw&_nc_ohc=2zsnvBhfbEcQ7kNvgFOw0ML&_nc_oc=AdgxDSKXnLucQhMxRffJrS3sQDLoPiZ4tZEdSSnlD2nCkE34HoaEN_wfm8z6KIX6-teiiMN-sbE4hTCbwVhdnKLE&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AL0eO4k7vGfq3iyO-dPXYgb&oh=00_AYAIWjyrP2rD8R5krOfGrBUUzGHmKf7MBIeRJXvq3A4xjw&oe=67BDBA07",
        "https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/476465677_600085632951867_5578565749473397801_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5Zg1pXsv_KcuZBUyKTFttK1b-NsdeNPkrVv42x140-QNBhRJJB-oLfavr1fJIoGt8KmkfzA_ayxJcx32Uq9UC&_nc_ohc=Fwp-PzKhLpAQ7kNvgEPtyLz&_nc_oc=AdhFtIC-CuRTrx7TTvTMxiXjr4F_I9JGrmVSaax5XgmEAy9xfC6oZ5WhO4SH526s1PTfBR04nxeGyc8dmyY_fE5E&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AX73_xgbok1zOUyQBiPjDrR&oh=00_AYAtudbwJbx3T9ZhV8utQ1THaW9a6LXLBzE3kgFanc-YJg&oe=67BDB801",
        "https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/475057451_592638110363286_5359393458461351118_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFRACJlGTwahE34Pq6ABu1ZDI9BgE-axXUMj0GAT5rFdQauygB-SI1zYt5heDGOsgSnrZ6xLu4a0IjaXnaMYJv3&_nc_ohc=afZqs-IEU3oQ7kNvgHyV827&_nc_oc=AdgzVhxZLqe7FLJ1oZXrIw-PBpluglaq6WwyscABrTNkymexhMPioOPnIPmqxQb7W4AZ8cZygOj4v4Q8HZPi3p_e&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=APzUVauM1BJAlTQj5bA3RU8&oh=00_AYAtzfJdaMPvdNdtUEdJZf81UVdNt2SfoaPzMgjQ7g1NPA&oe=67BDC7F8"
    ];
    return (
        <div>
            <Navbar/>
            <FilterSelect/>
            <div className='p-3 bg--200 md:flex md:gap-2 md:w-3/4  mx-auto'>
                <div id='deskripsi-produk' className='w-3/4 mx-auto border-2 border-neutral-400'>
                <ImageGallery images={images} />
                    <div id='deskripsi' className='p-5 text-neutral-900'>
                        <h1 className='text-2xl'>Nama Produk</h1>
                        <p className='text-lg'>Deskripsi Produk</p>
                    </div>
                </div>
                <div id='info-produk' className='pt-5 md:pt-0 mx-auto w-3/4 md:w-1/4 flex flex-col gap-5'>
                    <div id='card-harga' className='p-5 border-2 border-neutral-400 rounded-xl flex flex-col gap-2'>
                        <h2 className='text-neutral-900 text-2xl font-bold'>Rp1.000.000</h2>
                        <h3 className='text-neutral-900 text-xl font-medium'>Jual Minji</h3>
                        <p className='text-neutral-600'>Jalan</p>
                    </div>
                    <div id="card-seller" className="p-5 border-2 border-neutral-400 rounded-xl flex flex-col gap-4">
                        <div id="penjual" className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/480149941_1160852025499245_6944166981351456981_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEKIOpTE3JsFuxlQW5Z7u3LmKqWgz8XtFyYqpaDPxe0XAKPdcAhnjtcxByRu93Wfjz8_2jSKBjXf0LVSkedcQb4&_nc_ohc=Pwi5Sg06vBsQ7kNvgGzNAn0&_nc_oc=AdjHmsZ3GZgoWBo1rTh63BKbR4d_8dc-52Li90gAuss_wGx-FM3H6YeOX5B1rvK0DsDnjr5PMzrHgl-BHRg94DV1&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=AikOzOYmbOK0n3N2dyELLpD&oh=00_AYCzXJWJLITdd-MdFUyWBPaWN0gNZq75sPYFPYgqR4AKhg&oe=67BD7E0B" 
                                    alt="Penjual" 
                                    className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
                                />
                                <h2 className="text-neutral-900 text-xl font-bold">Penjual</h2>
                            </div>
                            <span className="text-neutral-500 text-2xl">›</span>
                        </div>
                        <button 
                            id="button-whatsapp"
                            className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                                alt="WA" 
                                className="w-6 h-6"
                            />
                            <p className="text-white font-medium">Chat Penjual</p>
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default DetailPage;