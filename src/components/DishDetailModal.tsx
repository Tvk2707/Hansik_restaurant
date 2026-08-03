import React from 'react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onPreOrder: (dish: MenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onPreOrder }) => {
  if (!dish) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#fcf9f8] max-w-[600px] w-full rounded-xl overflow-hidden shadow-2xl border border-[#c3c8c1]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72">
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
          
          <div className="absolute bottom-3 left-3 flex gap-2">
            {dish.isBestSeller && (
              <span className="bg-[#9c7c00] text-[#061b0e] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Best Seller
              </span>
            )}
            {dish.isNew && (
              <span className="bg-[#b4cdb8] text-[#0b2013] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                Mới
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[#735c00] text-xs font-label-md uppercase tracking-wider">
                Sen Vàng Bistro Signature
              </span>
              <h3 className="font-headline-sm text-2xl text-[#061b0e] mt-0.5">
                {dish.name}
              </h3>
            </div>
            <span className="font-headline-sm text-2xl text-[#735c00] font-bold">
              {dish.priceFormatted}
            </span>
          </div>

          <p className="text-[#434843] font-body-md text-sm leading-relaxed mb-4">
            {dish.description}
          </p>

          {/* Ingredients list */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="bg-white p-3.5 rounded-lg border border-[#c3c8c1]/30">
              <span className="text-xs font-label-md text-[#061b0e] block mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#735c00]">eco</span>
                Nguyên liệu tuyển chọn:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dish.ingredients.map((ing, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-[#f0eded] text-[#434843] px-2.5 py-1 rounded-full font-body-md"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};
