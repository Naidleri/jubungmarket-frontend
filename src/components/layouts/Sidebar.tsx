import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-20 md:w-48 min-h-screen bg-[#0A2647] text-white p-4">
      <div className="text-center mb-8">
        <p className="text-xl font-bold">ADMIN</p>
      </div>
      <div className="space-y-4">
        <div className="text-sm uppercase text-gray-400 hidden md:block">MENU</div>
        <NavLink 
          to="/admin/produk" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-2 rounded transition-all
            ${isActive 
              ? 'text-white border-l-4 border-white bg-blue-800/50 md:bg-transparent' 
              : 'text-gray-300 hover:bg-white'}`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="hidden md:inline">Produk</span>
        </NavLink>
        <NavLink 
          to="/admin/akun" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-2 rounded transition-all
            ${isActive 
              ? 'text-white border-l-4 border-white bg-blue-800/50 md:bg-transparent' 
              : 'text-gray-300 hover:bg-white'}`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="hidden md:inline">Akun</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;