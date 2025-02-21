import { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import CardProduk from '../components/fragments/CardProduk';
import FilterSelect from '../components/fragments/FilterSelect';
import FilterMenu from '../components/fragments/FilterMenu';
import filter from "../assets/filter.png";
import Footer from '../components/layouts/Footer';

function ResultPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div>
            <Navbar/>
            <FilterSelect/>
            <div className='w-full md:w-3/4 mx-auto px-4 md:px-0'>
                <button 
                    className="fixed bottom-4 left-4 z-50 md:hidden bg-blue-800 p-3 rounded-full shadow-lg"
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

                    <div className='w-full  md:w-3/4 pt-10 mx-auto'>
                        <h2 className='text-gray-900 pb-2'>Hasil dari "Makanan dan Minuman"</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
                            <CardProduk 
                                foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                                namaProduk='AS'
                                harga='Rp.10000'
                                penjual='Bu Sari'
                            />
                              <CardProduk 
                                foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                                namaProduk='AS'
                                harga='Rp.10000'
                                penjual='Bu Sari'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ResultPage