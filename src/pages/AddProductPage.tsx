import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface UploadedFile {
  name: string;
  id: string;
}

const AddProductPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = [];
    for (let i = 0; i < files.length; i++) {
      newFiles.push({
        name: files[i].name,
        id: `file-${Date.now()}-${i}`
      });
    }

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className='mb-16 flex items-center  gap-6'>
        <Link to="/admin/produk" className="text-5xl text-blue-950 ">  ‹ </Link>
        <h1 className="text-xl font-semibold text-blue-950">Tambah Produk</h1>
      </div>  
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6 text-neutral-900">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium mb-1">
              Nama Produk
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Masukan Nama Produk"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium mb-1">
              Pelaku UMKM
            </label>
            <input
              type="text"
              id="productCategory"
              placeholder="Masukan Nama Pelaku UMKM"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium mb-1">
              Deskripsi
            </label>
            <textarea
              id="productDescription"
              rows={5}
              placeholder="Masukan Deskripsi Produk"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
              No Telepon
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Masukan No Telepon Pemilik"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="productPrice" className="block text-sm font-medium mb-1">
              Harga Produk
            </label>
            <input
              type="text"
              id="productPrice"
              placeholder="Masukan Harga Produk"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-900">
            Upload Gambar Produk
          </label>
          <div className="border border-dashed border-gray-300 rounded p-6 flex flex-col items-center justify-center">
            <CloudArrowUpIcon className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm text-center text-neutral-500">
              Drag your file(s) or <span className="text-blue-500">browse</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Max 10 MB files are allowed
            </p>
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              multiple
              accept=".jpg,.jpeg,.png,.svg,.zip"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="fileUpload"
              className="w-full mt-4 text-center cursor-pointer"
            >
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 text-sm">
                Select Files
              </span>
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Hanya Support .jpg, .png and .svg dan zip file
          </p>

          <div className="mt-4 space-y-2 text-neutral-900">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between border border-gray-200 rounded px-3 py-2"
              >
                <span className="text-sm truncate">{file.name}</span>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
        <button className="px-4 py-2 bg-gray-500 text-white rounded flex items-center">
          <span>Batal</span>
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center">
          <span>Simpan</span>
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;