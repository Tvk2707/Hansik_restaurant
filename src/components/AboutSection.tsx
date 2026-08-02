import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto" id="gioi-thieu">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div className="order-2 md:order-1 relative h-[320px] md:h-[500px] rounded-lg overflow-hidden ambient-shadow group">
          <img 
            alt="Hành trình hương vị" 
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnRR-i37XUCga2fxGwuh7eNTg5sSKENs05WtNhe3glZN2l7F9dEG8KWGhUzb9xGcq9-Xr7b1-rqDPjz-k_a0iaGCQGtiHFaeA5-rU0lPRNSIddAdAdC4ktpCnCwiG8D7-izHAed0KBg-mFijjsFj0j50eEi4S5tSCbdAK_nu7qiCl7uHvWSU4hicHGqcy6eIll9jOvXeEl8Xckda9OEzElIp-6N6ixp8BbNRtycKMym9dC8-x4q60Kyg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b0e]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white text-sm font-body-md italic">
              "Mỗi món ăn là một câu chuyện tôn vinh thổ dưỡng và văn hóa ẩm thực Việt."
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center space-y-md">
          <span className="font-label-md text-label-md text-[#735c00] uppercase tracking-widest">
            Về Chúng Tôi
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#061b0e]">
            Hành trình hương vị
          </h2>
          <div className="w-16 h-[1px] bg-[#735c00]"></div>
          
          <p className="font-body-md text-body-md text-[#434843] leading-relaxed">
            Tại Sen Vàng Bistro, chúng tôi tôn vinh những giá trị truyền thống của ẩm thực Việt Nam thông qua lăng kính đương đại. Mỗi món ăn là một tác phẩm nghệ thuật, là sự giao thoa tinh tế giữa nguyên liệu bản địa chất lượng cao và kỹ thuật chế biến hiện đại, mang đến cho thực khách trải nghiệm ẩm thực đỉnh cao trong không gian sang trọng, ấm cúng.
          </p>

          <ul className="space-y-sm mt-md font-body-md text-body-md text-[#061b0e]">
            <li className="flex items-center space-x-sm">
              <span className="material-symbols-outlined text-[#735c00] text-lg mr-2">eco</span>
              <span>Nguyên liệu tươi sạch theo mùa</span>
            </li>
            <li className="flex items-center space-x-sm">
              <span className="material-symbols-outlined text-[#735c00] text-lg mr-2">restaurant_menu</span>
              <span>Đầu bếp nghệ nhân tâm huyết</span>
            </li>
            <li className="flex items-center space-x-sm">
              <span className="material-symbols-outlined text-[#735c00] text-lg mr-2">local_cafe</span>
              <span>Không gian đương đại sang trọng</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
