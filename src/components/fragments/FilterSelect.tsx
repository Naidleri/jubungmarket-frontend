const FilterSelect = () => {
    const filters = [
        { id: 1, text: 'Semua Kategori', isTitle: true },
        { id: 2, text: 'Makanan dan Minuman', isTitle: false },
        { id: 3, text: 'Kerajinan', isTitle: false },
        { id: 4, text: 'Produk pertanian dan Peternakan', isTitle: false },
        { id: 5, text: 'Oleh-oleh khas Jubung', isTitle: false },
    ];

    return (
        <div className='bg-neutral-100'>
            <div 
                className='filter flex bg-neutral-100 text-black py-3 px-4 md:px-6 overflow-x-auto'
                style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {filters.map((filter) => (
                    <div 
                        key={filter.id}
                        className={`
                            whitespace-nowrap 
                            ${filter.isTitle ? 'text-lg md:text-xl font-bold' : 'text-sm md:text-base font-normal'} 
                            ${filter.isTitle ? 'pr-4 md:pr-6' : 'px-4 md:px-6'}
                            cursor-pointer
                            hover:text-gray-600
                            transition-colors
                        `}
                    >
                        {filter.text}
                    </div>
                ))}
            </div>

            <style>
                {`
                    .filter::-webkit-scrollbar {
                        display: none;
                    }
                    .filter {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
            </style>
        </div>
    );
};

export default FilterSelect;