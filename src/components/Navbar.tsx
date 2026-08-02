import React, { useState, useEffect } from 'react';

interface NavbarProps {
  reservationCount?: number;
  onOpenReservationsList?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ reservationCount = 0, onOpenReservationsList }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('trang-chu');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['trang-chu', 'gioi-thieu', 'best-sellers-section', 'thuc-don', 'khong-gian', 'dat-ban', 'lien-he'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const closeMobileMenu = () => setMobileDrawerOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fcf9f8] shadow-md border-b border-[#c3c8c1]/30' : 'bg-[#fcf9f8] shadow-sm'}`}>
      <div className="flex justify-between items-center w-full px-8 max-w-[1400px] mx-auto h-20">
        {/* Brand Logo */}
        <a className="font-serif text-[28px] font-bold text-[#112316] transition-opacity duration-200 hover:opacity-80 flex items-center whitespace-nowrap" href="#trang-chu">
          Sen Vàng Bistro
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-12 font-sans text-[15px] font-bold">
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'trang-chu' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#trang-chu"
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'gioi-thieu' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#gioi-thieu"
            >
              Giới thiệu
            </a>
          </li>
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'best-sellers-section' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#best-sellers-section"
            >
              Best Seller
            </a>
          </li>
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'thuc-don' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#thuc-don"
            >
              Thực đơn
            </a>
          </li>
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'khong-gian' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#khong-gian"
            >
              Không gian
            </a>
          </li>
          <li>
            <a 
              className={`pb-1 transition-colors duration-300 whitespace-nowrap ${activeSection === 'lien-he' ? 'text-[#112316] border-b-2 border-[#a48634]' : 'text-[#434843] hover:text-[#a48634]'}`} 
              href="#lien-he"
            >
              Liên hệ
            </a>
          </li>
        </ul>

        {/* Trailing Action (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {reservationCount > 0 && (
            <button 
              onClick={onOpenReservationsList}
              className="relative p-2 text-[#112316] hover:text-[#a48634] transition-colors"
              title="Đơn đặt bàn của bạn"
            >
              <span className="material-symbols-outlined">event_available</span>
              <span className="absolute -top-1 -right-1 bg-[#a48634] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {reservationCount}
              </span>
            </button>
          )}

          <a 
            className="inline-flex items-center justify-center px-8 py-2.5 bg-[#112316] text-[#a48634] font-sans font-medium text-sm rounded-none hover:bg-[#1b3022] transition-colors duration-300 cursor-pointer whitespace-nowrap" 
            href="#dat-ban"
          >
            Đặt bàn
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {reservationCount > 0 && (
            <button 
              onClick={onOpenReservationsList}
              className="relative p-2 text-[#061b0e]"
            >
              <span className="material-symbols-outlined">event_available</span>
              <span className="absolute -top-1 -right-1 bg-[#735c00] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {reservationCount}
              </span>
            </button>
          )}
          <button 
            aria-label="Menu" 
            className="text-[#061b0e] p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileDrawerOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#fcf9f8] transition-transform duration-300 md:hidden ${mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        id="mobile-drawer"
      >
        <div className="flex flex-col h-full p-gutter">
          <div className="flex justify-between items-center mb-lg">
            <span className="font-headline-sm text-[#061b0e] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#735c00]">spa</span>
              Sen Vàng
            </span>
            <button className="p-2 text-[#061b0e]" id="close-menu" onClick={closeMobileMenu}>
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          
          <ul className="flex flex-col gap-md font-label-md text-lg">
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#trang-chu" onClick={closeMobileMenu}>Trang chủ</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#gioi-thieu" onClick={closeMobileMenu}>Giới thiệu</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#best-sellers-section" onClick={closeMobileMenu}>Best Seller</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#thuc-don" onClick={closeMobileMenu}>Thực đơn</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#khong-gian" onClick={closeMobileMenu}>Không gian</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#dat-ban" onClick={closeMobileMenu}>Đặt bàn</a>
            </li>
            <li className="border-b border-[#c3c8c1]/30 pb-2">
              <a className="mobile-link text-[#061b0e] hover:text-[#735c00] block py-1" href="#lien-he" onClick={closeMobileMenu}>Liên hệ</a>
            </li>
          </ul>

          <div className="mt-auto pt-6">
            <a 
              className="mobile-link block w-full py-4 bg-[#061b0e] text-[#ffe088] text-center rounded font-label-md text-label-md shadow-md" 
              href="#dat-ban" 
              onClick={closeMobileMenu}
            >
              Đặt bàn ngay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
