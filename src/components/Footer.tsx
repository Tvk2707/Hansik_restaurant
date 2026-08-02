import React from 'react';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#e4e2e1] w-full pt-xl pb-md border-t-[0.5px] border-[#735c00] font-body-md text-body-md text-[#1b1c1c]" id="lien-he">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-gutter max-w-container-max mx-auto mb-lg">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <a className="font-headline-sm text-headline-sm text-[#061b0e] inline-block mb-sm flex items-center gap-2" href="#trang-chu">
            <span className="material-symbols-outlined text-[#735c00]">spa</span>
            Sen Vàng Bistro
          </a>
          <p className="text-[#434843] mt-sm max-w-[400px] font-body-md">
            Mang tinh hoa ẩm thực Việt Nam đến với thực khách trong một không gian đương đại, tinh tế và đầy cảm hứng.
          </p>
          <div className="flex space-x-md mt-md">
            <button 
              onClick={() => alert('Đã sao chép liên kết Sen Vàng Bistro!')}
              className="text-[#434843] hover:text-[#735c00] transition-all p-1"
              title="Chia sẻ"
            >
              <span className="material-symbols-outlined">share</span>
            </button>
            <a 
              className="text-[#434843] hover:text-[#735c00] transition-all p-1" 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              title="Instagram"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a 
              className="text-[#434843] hover:text-[#735c00] transition-all p-1" 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              title="Facebook"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-[#061b0e] mb-sm font-bold">
            Liên hệ & Vị trí
          </h4>
          <ul className="space-y-sm text-sm">
            <li>
              <span className="text-[#434843] flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-sm mt-0.5">location_on</span>
                Địa chỉ: 123 Heritage Lane, Hà Nội
              </span>
            </li>
            <li>
              <span className="text-[#434843] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-sm">call</span>
                Điện thoại: +84 24 1234 5678
              </span>
            </li>
            <li>
              <span className="text-[#434843] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-sm">mail</span>
                Email: hello@senvang.com
              </span>
            </li>
            <li>
              <span className="text-[#434843] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-sm">schedule</span>
                Giờ mở cửa: 10:00 AM - 10:00 PM
              </span>
            </li>
          </ul>
        </div>

        {/* Map Thumbnail */}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=123+Heritage+Lane,+Hà+Nội"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 rounded-lg overflow-hidden h-36 bg-[#dcd9d9] relative border border-[#c3c8c1]/50 flex items-center justify-center group cursor-pointer hover:border-[#735c00] transition-colors"
        >
          <img 
            alt="Bản đồ vị trí nhà hàng" 
            className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ikjLOipR-d-W-faWxs-_WWCIWcWH0rDdLU-ROCmzs2H3Li9sHhMjPi_GeGF3y1LP010NG9rgxwn8IlbEZeg2pXxG6EaHtlsH8OG0Dvf12IY1Q5MsnZYRV34u4QODs1_Va2xVh9gn_2uLCHb1E9Mwz2BwoE4OyUJtH7vpiBs3JzbMiZqvVy7QtrYGyp_XJ1CyDqa3CG1CeWFGaZtMV3DZw-Paq8arC0Vn7P_1XXkzX8RUQVDf6KAqxw"
          />
          <div className="absolute inset-0 bg-[#061b0e]/20 group-hover:bg-[#061b0e]/10 transition-colors flex flex-col items-center justify-center p-2 text-center">
            <span className="material-symbols-outlined text-[#735c00] text-3xl group-hover:scale-110 transition-transform">location_on</span>
            <span className="text-[11px] font-label-md text-[#061b0e] bg-white/90 px-2 py-0.5 rounded shadow-sm mt-1">
              Xem chỉ đường bản đồ
            </span>
          </div>
        </a>
      </div>

      <div className="border-t-[0.5px] border-[#735c00]/30 w-full max-w-container-max mx-auto mt-md"></div>
      
      <div className="text-center mt-md font-caption text-caption text-[#434843]">
        © 2024 Sen Vàng Bistro. All rights reserved. Tinh hoa ẩm thực Việt Nam.
      </div>

    </footer>
  );
};
