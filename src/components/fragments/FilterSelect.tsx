import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../context/categoryContext';
import { FilterSelectProps } from "../../models/Filter";

const FilterSelect = ({ onCategorySelect }: FilterSelectProps) => {
    const { categories, getAllCategories } = useContext(CategoryContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (categories.length === 0) {
            getAllCategories();
        }
    }, [categories.length, getAllCategories]);

    const handleCategoryClick = (categoryId: number, categoryName: string) => {
        if (onCategorySelect) {
            onCategorySelect(categoryId);
        }
   
        if (categoryId === 0) { 
            navigate('/result');
        } else {
            navigate(`/result/${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
        }
    };

    const filters = [
        { id: 0, text: 'Semua Kategori', isTitle: true },
    ];
    if (categories.length > 0) {
        categories.forEach(category => {
            filters.push({
                id: category.id,
                text: category.name,
                isTitle: false
            });
        });
    } else {
        filters.push(
            { id: 2, text: 'Makanan dan Minuman', isTitle: false },
            { id: 3, text: 'Kerajinan', isTitle: false },
            { id: 4, text: 'Produk Pertanian dan Peternakan', isTitle: false },
            { id: 5, text: 'Oleh-oleh khas Jubung', isTitle: false }
        );
    }

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
                        onClick={() => handleCategoryClick(filter.id, filter.text)}
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
        </div>
    );
};

export default FilterSelect;