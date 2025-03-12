import { useContext, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import { SellerContext } from '../context/sellerContext';
import { CategoryContext } from '../context/categoryContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import CardProduk from '../components/fragments/CardProduk';
import FilterSelect from '../components/fragments/FilterSelect';
import FilterMenu from '../components/fragments/FilterMenu';
import filter from "../assets/filter.png";
import Footer from '../components/layouts/Footer';
import { formatPrice } from '../utils/function';
import { Product } from '../models/Product';

function ResultPage() {
    const { categoryName } = useParams<{ categoryName?: string }>();
    const location = useLocation();
    const { products, loading: loadingProducts, error: errorProducts, getAllProducts } = useContext(ProductContext);
    const { sellers, getAllSellers } = useContext(SellerContext);
    const { categories, getAllCategories } = useContext(CategoryContext);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');
        if (query) {
            setSearchQuery(query);
        }
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    getAllProducts(),
                    getAllSellers(),
                    getAllCategories()
                ]);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        
        fetchData();
    }, [getAllProducts, getAllSellers, getAllCategories]);

    useEffect(() => {
        if (categories.length > 0 && categoryName) {
            const formattedCategoryName = categoryName.replace(/-/g, ' ');

            const category = categories.find(cat => 
                cat.name.toLowerCase() === formattedCategoryName.toLowerCase()
            );
            
            if (category) {
                setSelectedCategoryId(category.id);
            }
        } else if (!categoryName) {
            setSelectedCategoryId(0);
        }
    }, [categories, categoryName]);

    useEffect(() => {
    if (products.length > 0) {
        let filtered = [...products];
        
        if (searchQuery) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        if (selectedCategoryId && selectedCategoryId > 0) { 
            filtered = filtered.filter(product => product.categoryId === selectedCategoryId);
        }
        
        setFilteredProducts(filtered);
    }
    }, [products, searchQuery, selectedCategoryId]);

    const handleCategorySelect = (categoryId: number) => {
        setSelectedCategoryId(categoryId);
    };

    const getSellerName = (sellerId: number) => {
        const seller = sellers.find(s => s.id === sellerId);
        return seller ? seller.name : 'Unknown Seller';
    };

    const getCategoryName = (categoryId: number) => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.name : 'All Categories';
    };

    return (
        <div>
            <Navbar/>
            <FilterSelect onCategorySelect={handleCategorySelect}/>
            <div className='w-full md:w-3/4 mx-auto px-4 md:px-0'>
                <button 
                    className="fixed bottom-4 left-4 z-50 md:hidden bg-gray-900 p-3 rounded-full shadow-lg"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    <img src={filter} alt="Filter" className="w-6 h-6 invert" />
                </button>

                <div className='flex relative'>
                    <div className={`fixed md:relative md:block top-0 left-0 h-full bg-white z-40 transform 
                        ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} 
                        md:translate-x-0 transition-transform duration-300 ease-in-out w-3/4 md:w-1/4`}>
                        <FilterMenu onClose={() => setIsFilterOpen(false)} />
                    </div>

                    {isFilterOpen && (
                        <div 
                            className="fixed inset-0 z-30 md:hidden"
                            onClick={() => setIsFilterOpen(false)}
                        />
                    )}

                    <div className='w-full md:w-3/4 pt-10 mx-auto text-gray-900'>
                        <h2 className='pb-2'>
                            {searchQuery 
                                ? `Hasil dari "${searchQuery}"` 
                                : selectedCategoryId && selectedCategoryId > 1 
                                    ? `Kategori: ${getCategoryName(selectedCategoryId)}` 
                                    : 'Semua Produk'}
                        </h2>

                        {loadingProducts && (
                            <div className="text-black-900 text-center py-8">Loading products...</div>
                        )}

                        {errorProducts && (
                            <div className="text-red-500 text-center py-8">Error: {errorProducts}</div>
                        )}

                        {filteredProducts.length === 0 && !loadingProducts && (
                            <div className="text-center py-4">Tidak ada produk tersedia</div>
                        )}

                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
                            {filteredProducts.map(product => (
                                <Link to={`/detail/${product.id}`} key={product.id}>
                                    <CardProduk 
                                        foto={typeof product.image === 'string' ? product.image : product.image[0]}
                                        namaProduk={product.name}
                                        harga={formatPrice(product.price)}
                                        penjual={getSellerName(product.sellerId)}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ResultPage;