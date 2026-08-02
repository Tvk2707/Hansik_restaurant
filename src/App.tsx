import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BestSellersSection } from './components/BestSellersSection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { OurSpaceSection } from './components/OurSpaceSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { MyReservationsModal } from './components/MyReservationsModal';
import { Toast } from './components/Toast';
import { MENU_ITEMS } from './data/menuData';
import { MenuItem, Reservation } from './types';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [preOrderedDishes, setPreOrderedDishes] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>(() => {
    try {
      const saved = localStorage.getItem('sen_vang_reservations');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isReservationsModalOpen, setIsReservationsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedAreaFromSpace, setSelectedAreaFromSpace] = useState<string | undefined>(undefined);

  // Sync reservations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sen_vang_reservations', JSON.stringify(reservations));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [reservations]);

  const handleAddPreOrderDish = (dish: MenuItem) => {
    setPreOrderedDishes((prev) => {
      const existing = prev.find((p) => p.item.id === dish.id);
      if (existing) {
        return prev.map((p) =>
          p.item.id === dish.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { item: dish, quantity: 1 }];
    });
    setToastMessage(`Đã thêm "${dish.name}" vào danh sách đặt trước!`);
  };

  const handleUpdatePreOrderQuantity = (itemId: string, delta: number) => {
    setPreOrderedDishes((prev) =>
      prev
        .map((p) => (p.item.id === itemId ? { ...p, quantity: p.quantity + delta } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const handleAddReservation = (newRes: Reservation) => {
    setReservations((prev) => [newRes, ...prev]);
    setPreOrderedDishes([]); // clear pre-orders after successful submission
    setToastMessage(`Đặt bàn thành công! Mã đơn: ${newRes.bookingCode}`);
  };

  const handleCancelReservation = (id: string) => {
    setReservations((prev) => prev.filter((r) => r.id !== id));
    setToastMessage('Đã hủy đơn đặt bàn.');
  };

  const handleSelectSpaceForBooking = (spaceName: string) => {
    setSelectedAreaFromSpace(spaceName);
    const element = document.getElementById('dat-ban');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-sans selection:bg-[#735c00] selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        reservationCount={reservations.length} 
        onOpenReservationsList={() => setIsReservationsModalOpen(true)}
      />

      <main className="pt-20">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 2.1 Best Sellers Section */}
        <BestSellersSection 
          items={MENU_ITEMS} 
          onSelectDish={setSelectedDish}
          onPreOrderDish={handleAddPreOrderDish}
        />

        {/* Gold Decorative Divider */}
        <div className="w-full max-w-container-max mx-auto px-gutter py-md">
          <div className="w-full border-t-[0.5px] border-solid gold-divider"></div>
        </div>

        {/* 3. Featured Menu Section */}
        <FeaturedMenuSection 
          items={MENU_ITEMS} 
          onSelectDish={setSelectedDish}
          onPreOrderDish={handleAddPreOrderDish}
        />

        {/* Gold Decorative Divider */}
        <div className="w-full max-w-container-max mx-auto px-gutter py-md">
          <div className="w-full border-t-[0.5px] border-solid gold-divider"></div>
        </div>

        {/* 4. Our Space Section */}
        <OurSpaceSection onSelectSpaceForBooking={handleSelectSpaceForBooking} />

        {/* 5. Online Reservation Form */}
        <ReservationSection 
          onAddReservation={handleAddReservation}
          preOrderedDishes={preOrderedDishes}
          onUpdatePreOrderQuantity={handleUpdatePreOrderQuantity}
          selectedAreaFromSpace={selectedAreaFromSpace}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dish Detail Modal */}
      <DishDetailModal 
        dish={selectedDish} 
        onClose={() => setSelectedDish(null)}
        onPreOrder={handleAddPreOrderDish}
      />

      {/* Reservations Drawer/Modal */}
      <MyReservationsModal 
        reservations={reservations}
        isOpen={isReservationsModalOpen}
        onClose={() => setIsReservationsModalOpen(false)}
        onCancelReservation={handleCancelReservation}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}
