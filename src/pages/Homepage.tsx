import Navbar from '../components/layouts/Navbar';
import CardProduk from '../components/fragments/CardProduk';
import FilterSelect from '../components/fragments/FilterSelect';

function Homepage() {
    return (
        <>
            <Navbar/>
            <FilterSelect/>
            <div className="w-3/4 pt-10 min-h-screen mx-auto p-5">
                <h2 className="text-gray-900 pb-2">
                    Rekomendasi Produk
                </h2>
                <div className=' md:flex flex-wrap gap-5 gap-y-6'>
                    <CardProduk 
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                    <CardProduk    
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                     <CardProduk 
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                    <CardProduk    
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk> <CardProduk 
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                    <CardProduk    
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk> <CardProduk 
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                    <CardProduk    
                    foto='https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/480757095_122139251942513512_4197415608789022688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhoFI2xBSRRFpuzHeYZbJnoSSjPvAvgyOhJKM-8C-DIycwNGZH2n_umDX-A4CszpZVFP_FUlPYOWvYyNI4gIqj&_nc_ohc=jlartmeCTcMQ7kNvgErwA3d&_nc_oc=Adi8osT9xCR4_kUHnQw6sYFc6mw0SgUy20vOrPQZqbeUbpxTG_WCDtwXlAdRTDMXLcGtWd-LoDdlzPb4m040vxKC&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=A7pJlTpke_WYqru5gjsQd2I&oh=00_AYC2FFaRi5EFTca0UX5WK_QyY2u6uiqxyR-H1_c5G58FAw&oe=67BBBE7B'
                    namaProduk='AS'
                    harga='Rp.10000'
                    penjual='Bu Sari'
                    ></CardProduk>
                </div>
            </div>
        </> 
    );
}

export default Homepage;
