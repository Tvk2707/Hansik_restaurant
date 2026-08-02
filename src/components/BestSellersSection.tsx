import React from 'react';
import { MenuItem } from '../types';

interface BestSellersSectionProps {
  items: MenuItem[];
  onSelectDish: (dish: MenuItem) => void;
  onPreOrderDish?: (dish: MenuItem) => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  items,
  onSelectDish,
  onPreOrderDish
}) => {
  const bestSellers = items.filter(item => item.isBestSeller).slice(0, 4);

  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto bg-[#f6f3f2] rounded-2xl my-8" id="best-sellers-section">
      <div className="text-center mb-lg flex flex-col items-center">
        <span className="font-label-md text-label-md text-[#735c00] uppercase tracking-widest mb-sm">
          Trải Nghiệm
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#061b0e]">
          Món Best Seller
        </h2>
        <div className="w-16 h-[1px] bg-[#735c00] my-md"></div>
        <p className="text-[#434843] font-body-md text-body-md">
          Những hương vị đặc trưng không thể bỏ qua tại Sen Vàng Bistro
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {bestSellers.map((item) => (
          <div 
            key={item.id}
            onClick={() => onSelectDish(item)}
            className="bg-[#ffffff] rounded-lg overflow-hidden ambient-shadow flex flex-col group hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-[#c3c8c1]/30 hover:border-[#735c00]/50"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={item.image}
              />
              <span className="absolute top-2 right-2 bg-[#9c7c00] text-[#061b0e] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Best Seller
              </span>
            </div>

            <div className="p-md flex flex-col flex-grow border-t border-[#c3c8c1]/30 bg-white">
              <h3 className="font-headline-sm text-headline-sm text-[#061b0e] text-xl group-hover:text-[#735c00] transition-colors mb-3 text-center mt-2">
                {item.name}
              </h3>
              <p className="font-body-md text-body-md text-[#434843] text-sm line-clamp-2 mb-4 text-center">
                {item.description}
              </p>
              <span className="font-body-md text-body-md font-bold text-[#735c00] text-base mt-auto text-center block">
                {item.priceFormatted}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
