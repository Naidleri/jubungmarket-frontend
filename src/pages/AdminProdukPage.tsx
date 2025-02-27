import Sidebar from '../components/layouts/Sidebar';
import Pagination from '../components/fragments/Pagination';

function AdminProdukPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Admin Produk</h2>
          </div>
          <div className="overflow-x-auto text-neutral-900">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 rounded-xl font-bold text-xl p-4 text-blue-950">
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">Pelaku UMKM</th>
                  <th className="px-4 py-2 text-left">Deskripsi</th>
                  <th className="px-4 py-2 text-left">Telepon</th>
                  <th className="px-4 py-2 text-left">Harga</th>
                  <th className="px-4 py-2 text-left">Gambar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Cuci Mobil</td>
                  <td className="px-4 py-2">Agus Kaka</td>
                  <td className="px-4 py-2 max-w-xs truncate">Cuci mobil yang sangat...</td>
                  <td className="px-4 py-2">httpswamw</td>
                  <td className="px-4 py-2">25.000</td>
                  <td className="px-4 py-2">image1.jpg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-red-200 flex justify-between items-center p-4'>
            <Pagination />
            <button className="bg-blue-950 text-white w-fit px-3 py-3 rounded-lg ">Tambah Produk</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProdukPage;
