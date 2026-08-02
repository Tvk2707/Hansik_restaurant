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
              <span className="bg-[#735c00] text-white text-xs px-2.5 py-1 rounded font-label-md">
                Best Seller
              </span>
            )}
            {dish.isNew && (
              <span className="bg-[#b4cdb8] text-[#0b2013] text-xs px-2.5 py-1 rounded font-label-md">
                Món mới
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
            <div className="mb-6 bg-white p-3.5 rounded-lg border border-[#c3c8c1]/30">
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

          <div className="flex gap-3 pt-3 border-t border-[#c3c8c1]/30">
            <button
              onClick={() => {
                onPreOrder(dish);
                onClose();
              }}
              className="flex-1 py-3 bg-[#061b0e] text-[#ffe088] rounded font-label-md text-sm hover:bg-[#1b3022] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              Thêm vào đơn đặt bàn
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#c3c8c1] text-[#061b0e] rounded font-label-md text-sm hover:bg-[#f0eded]"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
