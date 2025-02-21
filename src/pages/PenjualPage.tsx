import Navbar from '../components/layouts/Navbar';
import CardProduk from '../components/fragments/CardProduk';
import FilterSelect from '../components/fragments/FilterSelect';
import Footer from '../components/layouts/Footer';

function PenjualPage () {
  return (
    <div>
        <Navbar/>
        <FilterSelect/>
        <div className="w-3/4 pt-10 mx-auto p-5">
            <div id="penjual" className="flex items-center justify-between">
                <div className="w-full flex items-center gap-3 border-2 justify-between">
                    <div className='flex items-center gap-3'>
                        <img src="https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/480149941_1160852025499245_6944166981351456981_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEKIOpTE3JsFuxlQW5Z7u3LmKqWgz8XtFyYqpaDPxe0XAKPdcAhnjtcxByRu93Wfjz8_2jSKBjXf0LVSkedcQb4&_nc_ohc=Pwi5Sg06vBsQ7kNvgGzNAn0&_nc_oc=AdjHmsZ3GZgoWBo1rTh63BKbR4d_8dc-52Li90gAuss_wGx-FM3H6YeOX5B1rvK0DsDnjr5PMzrHgl-BHRg94DV1&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=AikOzOYmbOK0n3N2dyELLpD&oh=00_AYCzXJWJLITdd-MdFUyWBPaWN0gNZq75sPYFPYgqR4AKhg&oe=67BD7E0B" 
                            alt="Penjual" 
                            className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                            />
                        <h1 className="text-neutral-900 text-xl font-bold">Penjual</h1>
                    </div>
                    <button 
                            id="button-whatsapp"
                            className="flex items-center justify-center gap-2 w-50 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
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
            <div id='produk' className='min-h-96 border-2 border-t-neutral-300 mt-5'>
                <div className=' md:flex flex-wrap gap-5 gap-y-6 pt-5'>
                    <CardProduk
                    foto='https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/480479135_611177545176009_5101368756772418791_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPDqptbnCaJKKT2kvU9SwZjL5MuDA07ueMvky4MDTu5xgzgoqwwLWknajWJ4XrySPh-mt0kW5HESnbIG-BXzqX&_nc_ohc=JFZSW4NX6rkQ7kNvgHiNwXC&_nc_oc=AdguqMo9m1qzvl9RT2NGeJo00gtGsruQDkKQV4Dhv7g4WSRT4lEzjwbZWAJ1TyL_Edlru-2w2Sk9S8N7bwLRrdXF&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=A2woJINddOMoXisMo0_hssI&oh=00_AYAygXN-cIRMs0thX2x-n46RvI4bTWZ5Mec9-9TPgg0crw&oe=67BDFBC3'
                    harga='10'
                    namaProduk='set'
                    penjual='sari'
                    />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PenjualPage;