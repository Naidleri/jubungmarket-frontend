import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/productContext';
import { SellerContext } from '../context/sellerContext';
import Navbar from '../components/layouts/Navbar';
import FilterSelect from '../components/fragments/FilterSelect';
import Footer from '../components/layouts/Footer';
import { formatPrice } from '../utils/function';

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
    const { productId } = useParams<{ productId: string }>();
    const { product, loading: productLoading, error: productError, getProductById } = useContext(ProductContext);
    const { seller, loading: sellerLoading, error: sellerError, getSellerById } = useContext(SellerContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (!productId) {
                    setError('Produk tidak ditemukan');
                    setLoading(false);
                    return;
                }
                
                await getProductById(parseInt(productId));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Gagal memuat data');
            }
        };

        fetchData();
    }, [productId, getProductById]);

    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                if (product && product.sellerId) {
                    await getSellerById(product.sellerId);
                }
            } catch (err) {
                console.error('Failed to load seller:', err);
            } finally {
                setLoading(false);
            }
        };

        if (product) {
            fetchSellerData();
        }
    }, [product, getSellerById]);

    if (loading || productLoading || sellerLoading) {
        return <div className="text-center py-8">Memuat produk...</div>;
    }

    if (error || productError || sellerError) {
        return <div className="text-red-500 text-center py-8">Error: {error || productError || sellerError}</div>;
    }

    if (!product) {
        return <div className="text-center py-8">Produk tidak ditemukan</div>;
    }

    // Convert single image to array if needed
    const productImages = Array.isArray(product.image) ? product.image : [product.image];
    
    return (
        <div>
            <Navbar/>
            <FilterSelect/>
            <div className='p-3 bg--200 md:flex md:gap-2 md:w-3/4 mx-auto'>
                <div id='deskripsi-produk' className='w-3/4 mx-auto border-2 border-neutral-400'>
                    <ImageGallery images={productImages} />
                    <div id='deskripsi' className='p-5 text-neutral-900'>
                        <h1 className='text-2xl'>{product.name}</h1>
                        <p className='text-lg'>{product.description}</p>
                    </div>
                </div>
                <div id='info-produk' className='pt-5 md:pt-0 mx-auto w-3/4 md:w-1/4 flex flex-col gap-5'>
                    <div id='card-harga' className='p-5 border-2 border-neutral-400 rounded-xl flex flex-col gap-2'>
                        <h2 className='text-neutral-900 text-2xl font-bold'>{formatPrice(product.price)}</h2>
                        <h3 className='text-neutral-900 text-xl font-medium'>{product.name}</h3>
                        <p className='text-neutral-600'>
                            {product.categoryId ? `Kategori ID: ${product.categoryId}` : 'Tidak ada kategori'}
                        </p>
                    </div>
                    {seller && (
                        <div id="card-seller" className="p-5 border-2 border-neutral-400 rounded-xl flex flex-col gap-4">
                            <div id="penjual" className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center overflow-hidden">
                                        {seller.name?.charAt(0).toUpperCase() || 'S'}
                                    </div>
                                    <h2 className="text-neutral-900 text-xl font-bold">{seller.name}</h2>
                                </div>
                                <span className="text-neutral-500 text-2xl">›</span>
                            </div>
                            <div className="text-sm text-neutral-600 mb-2">
                                <p>{seller.address}</p>
                                <p>Total Produk: {seller.countProduct}</p>
                            </div>
                            <a 
                                href={`https://wa.me/${seller.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="button-whatsapp"
                                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                <p className="text-white font-medium">Chat Penjual</p>
                            </a>
                        </div>
                    )}
                </div> 
            </div>
            <Footer/>
        </div>
    );
}

export default DetailPage;