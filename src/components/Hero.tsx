import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden" id="trang-chu">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="bg-cover bg-center w-full h-full object-cover transition-transform duration-10000 scale-105" 
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASvnStN6Q-d_Cab43rz9bUqH8AwulHz7gunDzgcS8qd7OTMfEs7PJdPIxNeeOrP_tk8wftG0Y3C-R_kKBz22LMTtIoiBOJC1C36OOuU2CxGCd1-o_jHK73pZ5-4PKwZiJSuzD_KErepYhMzv1AckRpefO76fdgPVC6tOyuEuqr591Y3j5TIHeE1pGS7WcR3RK81b1Ef6EueykI7xsz05OfbEJLEu3K2VPQtfdjGJxGsI0YepvDu6wBpg')` 
          }}
        />
        <div className="absolute inset-0 bg-[#061b0e]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061b0e]/80 via-transparent to-[#061b0e]/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12">
        <span className="text-[#a48634] font-sans text-sm uppercase tracking-[0.25em] mb-4 font-medium">
          PREMIUM VIETNAMESE CUISINE
        </span>

        <h1 className="font-display-lg text-5xl md:text-[84px] leading-none text-white mb-4 font-bold tracking-tight drop-shadow-lg">
          Sen Vàng Bistro
        </h1>

        <p className="font-body-lg text-white mb-10 max-w-2xl mx-auto text-base md:text-[17px] leading-relaxed drop-shadow-md">
          Nơi tôn vinh tinh hoa ẩm thực Việt Nam trong không gian đương đại, mang đến trải nghiệm đánh thức mọi giác quan.
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-4 px-4 justify-center">
          <a 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#112316] text-[#a48634] font-label-md text-sm rounded-none shadow-lg w-full sm:w-auto transition-all duration-300 border border-[#2a3f2b] hover:bg-[#1b3022] whitespace-nowrap" 
            href="#dat-ban"
          >
            Đặt bàn ngay
          </a>
          <a 
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-label-md text-sm rounded-none w-full sm:w-auto transition-all duration-300 border border-white hover:bg-white/10 whitespace-nowrap" 
            href="#thuc-don"
          >
            Xem thực đơn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#gioi-thieu" 
        className="absolute bottom-6 z-10 text-[#ffe088]/70 hover:text-[#ffe088] transition-colors flex flex-col items-center gap-1 animate-bounce text-xs font-label-md"
      >
        <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
      </a>
    </section>
  );
};
