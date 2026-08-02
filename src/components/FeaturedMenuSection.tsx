import React, { useState } from 'react';
import { MenuItem } from '../types';

interface FeaturedMenuSectionProps {
  items: MenuItem[];
  onSelectDish: (dish: MenuItem) => void;
  onPreOrderDish?: (dish: MenuItem) => void;
}

export const FeaturedMenuSection: React.FC<FeaturedMenuSectionProps> = ({
  items,
  onSelectDish,
  onPreOrderDish
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'best-seller' | 'new' | 'main'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = items.filter((item) => {
    // Filter by tab
    if (activeTab === 'best-seller' && !item.isBestSeller) return false;
    if (activeTab === 'new' && !item.isNew) return false;
    if (activeTab === 'main' && item.category !== 'main') return false;

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchIngr = item.ingredients?.some(ing => ing.toLowerCase().includes(q));
      return matchName || matchDesc || matchIngr;
    }

    return true;
  });

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto bg-[#fcf9f8]" id="thuc-don">
      <div className="text-center mb-lg flex flex-col items-center">
        <span className="font-label-md text-label-md text-[#735c00] uppercase tracking-widest mb-sm">
          Khám Phá
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#061b0e]">
          Thực đơn đặc sắc
        </h2>
        <div className="w-16 h-[1px] bg-[#735c00] mt-md mb-md"></div>
        <p className="text-[#434843] max-w-[600px] w-full font-body-md text-body-md text-center mx-auto">
          Khám phá sự giao thoa hoàn hảo giữa nguyên liệu Việt tuyển chọn và nghệ thuật ẩm thực tinh tế.
        </p>
      </div>

      {/* Search & Filter bar */}
      <div className="max-w-[448px] w-full mx-auto mb-8 relative px-4">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#735c00]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm món ăn, nguyên liệu..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#c3c8c1] rounded-full text-sm font-body-md focus:border-[#735c00] focus:ring-1 focus:ring-[#735c00] outline-none transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-[#737973] hover:text-[#061b0e]"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-md mb-lg border-b border-[#c3c8c1]/30 pb-2">
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 font-label-md text-label-md transition-colors duration-300 border-b-2 ${
            activeTab === 'all' 
              ? 'border-[#735c00] text-[#735c00] font-bold' 
              : 'border-transparent text-[#434843] hover:text-[#735c00]'
          }`}
        >
          Tất cả món
        </button>
        <button 
          onClick={() => setActiveTab('best-seller')}
          className={`px-4 py-2 font-label-md text-label-md transition-colors duration-300 border-b-2 ${
            activeTab === 'best-seller' 
              ? 'border-[#735c00] text-[#735c00] font-bold' 
              : 'border-transparent text-[#434843] hover:text-[#735c00]'
          }`}
        >
          Món bán chạy
        </button>
        <button 
          onClick={() => setActiveTab('new')}
          className={`px-4 py-2 font-label-md text-label-md transition-colors duration-300 border-b-2 ${
            activeTab === 'new' 
              ? 'border-[#735c00] text-[#735c00] font-bold' 
              : 'border-transparent text-[#434843] hover:text-[#735c00]'
          }`}
        >
          Món mới
        </button>
        <button 
          onClick={() => setActiveTab('main')}
          className={`px-4 py-2 font-label-md text-label-md transition-colors duration-300 border-b-2 ${
            activeTab === 'main' 
              ? 'border-[#735c00] text-[#735c00] font-bold' 
              : 'border-transparent text-[#434843] hover:text-[#735c00]'
          }`}
        >
          Món chính
        </button>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-[#434843] bg-white rounded-lg border border-[#c3c8c1]/30 p-8">
          <span className="material-symbols-outlined text-4xl text-[#735c00] mb-2">restaurant</span>
          <p className="font-headline-sm text-[#061b0e] text-lg">Không tìm thấy món ăn phù hợp</p>
          <p className="text-sm text-[#737973] mt-1">Thử tìm kiếm từ khóa khác hoặc bỏ chọn bộ lọc.</p>
          <button
            onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 bg-[#061b0e] text-[#ffe088] rounded text-sm font-label-md"
          >
            Xem lại tất cả món
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-md" id="menu-grid-container">
          {/* First 8 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {filteredItems.slice(0, 8).map((item) => (
              <div 
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col group hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-[#c3c8c1]/30 hover:border-[#735c00]/50"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={item.image}
                  />
                  {item.isBestSeller && (
                    <span className="absolute top-2 right-2 bg-[#9c7c00] text-[#061b0e] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">star</span> Best Seller
                    </span>
                  )}
                  {item.isNew && !item.isBestSeller && (
                    <span className="absolute top-2 right-2 bg-[#b4cdb8] text-[#0b2013] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                      Mới
                    </span>
                  )}
                </div>

                <div className="p-md flex flex-col flex-grow bg-white/80 backdrop-blur-sm border-t border-[#c3c8c1]/30">
                  <h3 className="font-headline-sm text-headline-sm text-[#061b0e] text-xl group-hover:text-[#735c00] transition-colors mb-3 text-center mt-2">
                    {item.name}
                  </h3>
                  <p className="font-body-md text-body-md text-[#434843] text-sm line-clamp-2 mt-auto mb-4 text-center">
                    {item.description}
                  </p>
                  <span className="font-body-md text-body-md font-bold text-[#735c00] text-base text-center block mb-2">
                    {item.priceFormatted}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible Remaining Items */}
          {filteredItems.length > 8 && (
            <div 
              className="grid transition-[grid-template-rows] duration-500 ease-in-out"
              style={{ gridTemplateRows: showAllItems ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md pt-2">
                  {filteredItems.slice(8).map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => onSelectDish(item)}
                      className="bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col group hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-[#c3c8c1]/30 hover:border-[#735c00]/50"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          src={item.image}
                        />
                        {item.isBestSeller && (
                          <span className="absolute top-2 right-2 bg-[#9c7c00] text-[#061b0e] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">star</span> Best Seller
                          </span>
                        )}
                        {item.isNew && !item.isBestSeller && (
                          <span className="absolute top-2 right-2 bg-[#b4cdb8] text-[#0b2013] px-3 py-1.5 rounded-full text-xs font-label-md font-bold shadow-sm flex items-center gap-1">
                            Mới
                          </span>
                        )}
                      </div>

                      <div className="p-md flex flex-col flex-grow bg-white/80 backdrop-blur-sm border-t border-[#c3c8c1]/30">
                        <h3 className="font-headline-sm text-headline-sm text-[#061b0e] text-xl group-hover:text-[#735c00] transition-colors mb-3 text-center mt-2">
                          {item.name}
                        </h3>
                        <p className="font-body-md text-body-md text-[#434843] text-sm line-clamp-2 mt-auto mb-4 text-center">
                          {item.description}
                        </p>
                        <span className="font-body-md text-body-md font-bold text-[#735c00] text-base text-center block mb-2">
                          {item.priceFormatted}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Show All Toggle Button */}
      {filteredItems.length > 8 && (
        <div className="mt-10 text-center">
          <button 
            onClick={() => setShowAllItems(!showAllItems)}
            className="inline-flex items-center justify-center px-8 py-3 border border-[#735c00] text-[#735c00] font-label-md text-label-md rounded hover:bg-[#735c00]/10 transition-colors duration-300 min-w-[200px]"
          >
            {showAllItems ? 'Thu gọn' : 'Xem tất cả'}
          </button>
        </div>
      )}
    </section>
  );
};

