import React, { useState } from 'react';
import { SPACE_ITEMS } from '../data/menuData';
import { SpaceGalleryItem } from '../types';

interface OurSpaceSectionProps {
  onSelectSpaceForBooking?: (spaceName: string) => void;
}

export const OurSpaceSection: React.FC<OurSpaceSectionProps> = ({ onSelectSpaceForBooking }) => {
  const [selectedSpace, setSelectedSpace] = useState<SpaceGalleryItem | null>(null);

  const mainSpace = SPACE_ITEMS[0];
  const rightSpaces = SPACE_ITEMS.slice(1);

  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto" id="khong-gian">
      <div className="text-center mb-lg flex flex-col items-center">
        <span className="font-label-md text-label-md text-[#735c00] uppercase tracking-widest mb-sm">
          Trải Nghiệm
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#061b0e]">
          Không gian Sen Vàng
        </h2>
        <div className="w-16 h-[1px] bg-[#735c00] mt-md mb-md"></div>
        <p className="text-[#434843] max-w-2xl mx-auto font-body-md text-body-md">
          Thiết kế mở giao thoa ánh sáng tự nhiên và nội thất gỗ mộc mạc, tạo nên những góc nhỏ riêng tư, hoàn hảo cho mọi dịp gặp gỡ.
        </p>
      </div>

      {/* Asymmetric Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
        {/* Main large card (8 cols) */}
        <div 
          onClick={() => setSelectedSpace(mainSpace)}
          className="md:col-span-8 rounded-lg overflow-hidden ambient-shadow h-[320px] md:h-full relative group cursor-pointer border border-[#c3c8c1]/30"
        >
          <img 
            alt={mainSpace.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src={mainSpace.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b0e]/80 via-[#061b0e]/20 to-transparent p-md flex flex-col justify-end">
            <span className="bg-[#735c00] text-white text-xs px-2.5 py-1 rounded w-fit mb-2 font-label-md">
              Sức chứa: {mainSpace.capacity}
            </span>
            <h4 className="font-headline-sm text-headline-sm text-[#fcf9f8] text-2xl mb-1">
              {mainSpace.title}
            </h4>
            <p className="text-white/80 text-sm font-body-md line-clamp-2">
              {mainSpace.subtitle} - {mainSpace.description}
            </p>
            <div className="mt-3 text-[#ffe088] text-xs font-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Khám phá không gian</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Right side cards (4 cols) */}
        <div className="md:col-span-4 flex flex-col gap-md h-full">
          {rightSpaces.map((space) => (
            <div 
              key={space.id}
              onClick={() => setSelectedSpace(space)}
              className="rounded-lg overflow-hidden ambient-shadow flex-1 relative group min-h-[250px] cursor-pointer border border-[#c3c8c1]/30"
            >
              <img 
                alt={space.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={space.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b0e]/80 via-transparent to-transparent p-sm flex flex-col justify-end">
                <span className="bg-[#061b0e]/80 backdrop-blur-sm text-[#ffe088] text-[10px] px-2 py-0.5 rounded w-fit mb-1 font-label-md">
                  {space.capacity}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-[#fcf9f8] text-lg">
                  {space.title}
                </h4>
                <p className="text-white/70 text-xs font-body-md line-clamp-1">
                  {space.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Space Preview */}
      {selectedSpace && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedSpace(null)}
        >
          <div 
            className="bg-[#fcf9f8] max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl border border-[#c3c8c1]/40 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedSpace.image} 
                alt={selectedSpace.title} 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedSpace(null)}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 hover:bg-black transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div className="absolute bottom-3 left-3 bg-[#735c00] text-white px-3 py-1 rounded text-xs font-label-md">
                Sức chứa: {selectedSpace.capacity}
              </div>
            </div>

            <div className="p-6">
              <span className="text-[#735c00] text-xs font-label-md uppercase tracking-wider">
                {selectedSpace.subtitle}
              </span>
              <h3 className="font-headline-sm text-2xl text-[#061b0e] mt-1 mb-3">
                {selectedSpace.title}
              </h3>
              <p className="text-[#434843] font-body-md leading-relaxed mb-6">
                {selectedSpace.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#c3c8c1]/30">
                <a
                  href="#dat-ban"
                  onClick={() => {
                    if (onSelectSpaceForBooking) {
                      onSelectSpaceForBooking(selectedSpace.title);
                    }
                    setSelectedSpace(null);
                  }}
                  className="flex-1 py-3 bg-[#061b0e] text-[#ffe088] rounded text-center font-label-md text-sm hover:bg-[#1b3022] transition-colors"
                >
                  Đặt bàn khu vực này
                </a>
                <button
                  onClick={() => setSelectedSpace(null)}
                  className="px-6 py-3 border border-[#c3c8c1] text-[#061b0e] rounded font-label-md text-sm hover:bg-[#f0eded]"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
