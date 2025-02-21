import Navbar from '../components/layouts/Navbar';
import FilterSelect from '../components/fragments/FilterSelect';

function DetailPage() {
    return (
        <div>
            <Navbar/>
            <FilterSelect/>
            <div className='p-3 bg--200 md:flex md:gap-2 md:w-3/4  mx-auto'>
                <div id='deskripsi-produk' className='w-3/4 mx-auto border-2 border-neutral-400'>
                    <div id='main-image' className="w-full h-96 aspect-square border-b border-neutral-400">
                        <img 
                            src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/477030273_1174229157476897_7373581820297508564_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFLPph_i9dn6D6MGj1tAuZMpoWmFF0X13CmhaYUXRfXcIrmyyhqTqlgTaYPm0sVeueWiAPKQlAF0z64xp3dr18t&_nc_ohc=AlEgIfyKyDwQ7kNvgHrqM5y&_nc_oc=AdjWTF0UgbPyjqsG-XBCk83bfsi5W9AAH7SSqtn8TeSYcW0FHIWuhFx1PP6uekD7umOpVtHwvhqVf8ySb8AbwfDQ&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=Ae_9TE8br8H7WeGaFDc5oic&oh=00_AYAIsSQfeSOeydDm2xhNoXPBQ-R07ZAPgaGSdr2qWkiuGA&oe=67BD6E9A" 
                            alt="Gambar Produk" 
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div id='sub-image' className="flex gap-2 p-5 h-50 overflow-y-hidden border-b border-neutral-400">
                        <img src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/476066902_600085462951884_6740729431220176873_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9-4B1I0Vry0vcLwnneJ1KIJ6HYvOZCZognodi85kJmmznFrGBLGdPbKcLP-K6sA6-I6ZS6FN_ychLEGOG9ixm&_nc_ohc=MfOpdqq3S5EQ7kNvgE2Vt0-&_nc_oc=AdiGM_R0l3uehbVV3YBdbpv-FTJfAQnopuHXvhJqig_j8aMr-ZbkGPtPLN7LEUna2uMYJuxK4uXr79Xjmj0hUJH3&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AVAw1NZ5gWczyaOQ8JehY5T&oh=00_AYBenyRziQja6CPZD0XxA8l3pV6GgG3eO4Kr73bhsiQ9HQ&oe=67BD6E25" 
                             alt="" 
                             />
                          <img src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/476066902_600085462951884_6740729431220176873_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9-4B1I0Vry0vcLwnneJ1KIJ6HYvOZCZognodi85kJmmznFrGBLGdPbKcLP-K6sA6-I6ZS6FN_ychLEGOG9ixm&_nc_ohc=MfOpdqq3S5EQ7kNvgE2Vt0-&_nc_oc=AdiGM_R0l3uehbVV3YBdbpv-FTJfAQnopuHXvhJqig_j8aMr-ZbkGPtPLN7LEUna2uMYJuxK4uXr79Xjmj0hUJH3&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AVAw1NZ5gWczyaOQ8JehY5T&oh=00_AYBenyRziQja6CPZD0XxA8l3pV6GgG3eO4Kr73bhsiQ9HQ&oe=67BD6E25" 
                             alt="" 
                             />  <img src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/476066902_600085462951884_6740729431220176873_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9-4B1I0Vry0vcLwnneJ1KIJ6HYvOZCZognodi85kJmmznFrGBLGdPbKcLP-K6sA6-I6ZS6FN_ychLEGOG9ixm&_nc_ohc=MfOpdqq3S5EQ7kNvgE2Vt0-&_nc_oc=AdiGM_R0l3uehbVV3YBdbpv-FTJfAQnopuHXvhJqig_j8aMr-ZbkGPtPLN7LEUna2uMYJuxK4uXr79Xjmj0hUJH3&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AVAw1NZ5gWczyaOQ8JehY5T&oh=00_AYBenyRziQja6CPZD0XxA8l3pV6GgG3eO4Kr73bhsiQ9HQ&oe=67BD6E25" 
                             alt="" 
                             />  <img src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/476066902_600085462951884_6740729431220176873_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9-4B1I0Vry0vcLwnneJ1KIJ6HYvOZCZognodi85kJmmznFrGBLGdPbKcLP-K6sA6-I6ZS6FN_ychLEGOG9ixm&_nc_ohc=MfOpdqq3S5EQ7kNvgE2Vt0-&_nc_oc=AdiGM_R0l3uehbVV3YBdbpv-FTJfAQnopuHXvhJqig_j8aMr-ZbkGPtPLN7LEUna2uMYJuxK4uXr79Xjmj0hUJH3&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=AVAw1NZ5gWczyaOQ8JehY5T&oh=00_AYBenyRziQja6CPZD0XxA8l3pV6GgG3eO4Kr73bhsiQ9HQ&oe=67BD6E25" 
                             alt="" 
                             />
                    </div>
                    <div id='deskripsi' className='p-5 text-neutral-900'>
                        <h1 className='text-2xl'>Nama Produk</h1>
                        <p className='text-lg'>Deskripsi Produk</p>
                    </div>
                </div>
                <div id='info-produk' className=' mx-auto w-2/4 md:w-1/4 flex flex-col gap-5'>
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