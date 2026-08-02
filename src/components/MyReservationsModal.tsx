import React from 'react';
import { Reservation } from '../types';

interface MyReservationsModalProps {
  reservations: Reservation[];
  isOpen: boolean;
  onClose: () => void;
  onCancelReservation: (id: string) => void;
}

export const MyReservationsModal: React.FC<MyReservationsModalProps> = ({
  reservations,
  isOpen,
  onClose,
  onCancelReservation
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#fcf9f8] max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl border border-[#c3c8c1]/40 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#c3c8c1]/30 bg-[#061b0e] text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffe088]">event_available</span>
            <h3 className="font-headline-sm text-xl text-[#ffe088]">Lịch Sử Đặt Bàn Của Bạn</h3>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {reservations.length === 0 ? (
            <div className="text-center py-12 text-[#434843]">
              <span className="material-symbols-outlined text-4xl text-[#735c00] mb-2">table_restaurant</span>
              <p className="font-headline-sm text-lg text-[#061b0e]">Chưa có đơn đặt bàn nào</p>
              <p className="text-xs text-[#737973] mt-1">Quý khách vui lòng chọn ngày giờ và gửi thông tin đặt bàn tại biểu mẫu bên dưới.</p>
            </div>
          ) : (
            reservations.map((res) => (
              <div key={res.id} className="bg-white rounded-lg p-4 border border-[#c3c8c1]/40 ambient-shadow relative">
                <div className="flex justify-between items-start mb-2 border-b border-[#f0eded] pb-2">
                  <div>
                    <span className="text-xs font-mono bg-[#ffe088]/40 text-[#061b0e] px-2 py-0.5 rounded font-bold">
                      Mã: {res.bookingCode}
                    </span>
                    <span className="text-xs text-[#737973] ml-2">
                      Đã tạo lúc {res.createdAt}
                    </span>
                  </div>
                  <span className="text-xs bg-[#b4cdb8] text-[#0b2013] px-2 py-0.5 rounded font-label-md">
                    Đã xác nhận
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#434843] mb-3">
                  <div>
                    <strong className="text-[#061b0e]">Khách hàng:</strong> {res.name} ({res.phone})
                  </div>
                  <div>
                    <strong className="text-[#061b0e]">Thời gian:</strong> {res.time} - {res.date}
                  </div>
                  <div>
                    <strong className="text-[#061b0e]">Số khách:</strong> {res.guests} người
                  </div>
                  <div>
                    <strong className="text-[#061b0e]">Khu vực:</strong> {res.area}
                  </div>
                </div>

                {res.notes && (
                  <p className="text-xs text-[#737973] italic bg-[#f6f3f2] p-2 rounded mb-3">
                    Ghi chú: "{res.notes}"
                  </p>
                )}

                {res.preOrderedItems && res.preOrderedItems.length > 0 && (
                  <div className="bg-[#f0eded] p-2.5 rounded text-xs mb-3">
                    <span className="font-semibold text-[#061b0e] block mb-1">Món ăn đặt trước:</span>
                    <div className="space-y-1">
                      {res.preOrderedItems.map(({ item, quantity }) => (
                        <div key={item.id} className="flex justify-between text-[#434843]">
                          <span>{item.name} x{quantity}</span>
                          <span>{item.priceFormatted}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => onCancelReservation(res.id)}
                    className="text-xs text-[#ba1a1a] hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">cancel</span>
                    Hủy đặt bàn
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-[#c3c8c1]/30 bg-[#f6f3f2] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#061b0e] text-[#ffe088] rounded font-label-md text-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
