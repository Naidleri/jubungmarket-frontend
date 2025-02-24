import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/productContext';
import { SellerContext } from '../context/sellerContext';
import Navbar from '../components/layouts/Navbar';
import CardProduk from '../components/fragments/CardProduk';
import FilterSelect from '../components/fragments/FilterSelect';
import Footer from '../components/layouts/Footer';
import { formatPrice } from '../utils/function'
 
function Homepage() {
  const { products, loading: loadingProducts, error: errorProducts, getAllProducts } = useContext(ProductContext);
  const { sellers, getAllSellers } = useContext(SellerContext);

  useEffect(() => {
    const fetchData = async () => {
        try {
            await Promise.all([
                getAllProducts(),
                getAllSellers()
            ]);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    
    if (products.length === 0 && sellers.length === 0) {
        fetchData();
    }
}, []);

  const getSellerName = (sellerId: number) => {
    const seller = sellers.find(s => s.id === sellerId);
    return seller ? seller.name : 'Unknown Seller';
  };
  

  if (loadingProducts) {
    return <div className="text-black-900 text-center py-8">Loading products...</div>;
  }

  if (errorProducts) {
    return <div className="text-red-500 text-center py-8">Error: {errorProducts}</div>;
  }

  return (
    <>
      <Navbar/>
      <FilterSelect/>
      <div className="w-3/4 pt-10 min-h-screen mx-auto p-5">
        <h2 className="text-gray-900 pb-2">
          Rekomendasi Produk
        </h2>
        
        {products.length === 0 && !loadingProducts && (
          <div className="text-center py-4">Tidak ada produk tersedia</div>
        )}

        <div className='md:flex flex-wrap gap-5 gap-y-6'>
          {products.map(product => (
            <CardProduk 
              key={product.id}
              foto={typeof product.image === 'string' ? product.image : product.image[0]}
              namaProduk={product.name}
              harga={formatPrice(product.price)}
              penjual={getSellerName(product.sellerId)}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </> 
  );
}

export default Homepage;