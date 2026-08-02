import React, { useState } from 'react';
import { MenuItem, Reservation } from '../types';
import { siteConfig } from '../config';

interface ReservationSectionProps {
  onAddReservation: (reservation: Reservation) => void;
  preOrderedDishes: { item: MenuItem; quantity: number }[];
  onUpdatePreOrderQuantity: (itemId: string, delta: number) => void;
  selectedAreaFromSpace?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onAddReservation,
  preOrderedDishes,
  onUpdatePreOrderQuantity,
  selectedAreaFromSpace
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: '3-4',
    area: selectedAreaFromSpace || 'Sảnh chính gia đình',
    notes: ''
  });

  const [pendingBooking, setPendingBooking] = useState<Reservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const errors: string[] = [];
    if (!formData.name) {
      errors.push("Vui lòng nhập họ và tên.");
    } else if (formData.name.trim().length < 2) {
      errors.push("Họ và tên phải có ít nhất 2 ký tự.");
    } else if (/^\d+$/.test(formData.name.trim())) {
      errors.push("Họ và tên không được chỉ toàn số.");
    }

    const normalizedPhone = formData.phone.replace(/\s/g, "");
    if (!normalizedPhone) {
      errors.push("Vui lòng nhập số điện thoại.");
    } else if (!/^0\d{9}$/.test(normalizedPhone)) {
      errors.push("Số điện thoại phải gồm 10 số và bắt đầu bằng 0.");
    }

    if (!formData.date) {
      errors.push("Vui lòng chọn ngày đặt bàn.");
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(formData.date);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.push("Ngày đặt bàn không được nhỏ hơn hôm nay.");
      }
    }

    if (!formData.time) {
      errors.push("Vui lòng chọn giờ đặt bàn.");
    } else if (formData.time < "09:00" || formData.time > "22:00") {
      errors.push(`Giờ đặt bàn phải nằm trong khoảng 09:00 - 22:00.`);
    }

    if (!formData.guests) {
      errors.push("Vui lòng chọn số khách.");
    }

    if (formData.notes && formData.notes.length > 300) {
      errors.push("Ghi chú không được vượt quá 300 ký tự.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const randomCode = 'SVB-' + Math.floor(1000 + Math.random() * 9000);
    const newReservation: Reservation = {
      id: Date.now().toString(),
      bookingCode: randomCode,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      area: formData.area,
      notes: formData.notes,
      preOrderedItems: [...preOrderedDishes],
      status: 'confirmed',
      createdAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setPendingBooking(newReservation);
  };

  const confirmBooking = async () => {
    if (!pendingBooking) return;
    setIsSubmitting(true);

    const message = `YÊU CẦU ĐẶT BÀN MỚI\n
Nhà hàng: ${siteConfig.restaurantName}
Họ tên: ${pendingBooking.name}
SĐT: ${pendingBooking.phone}
Ngày: ${pendingBooking.date}
Giờ: ${pendingBooking.time}
Số khách: ${pendingBooking.guests}
Khu vực: ${pendingBooking.area}
Ghi chú: ${pendingBooking.notes || "Không có"}
${pendingBooking.preOrderedItems && pendingBooking.preOrderedItems.length > 0 ? `\nMón đặt trước:\n${pendingBooking.preOrderedItems.map(p => `- ${p.item.name} x${p.quantity}`).join('\n')}` : ''}

Vui lòng liên hệ khách để xác nhận đặt bàn.`;

    try {
      const url = `https://api.telegram.org/bot${siteConfig.telegramBotToken}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: siteConfig.telegramChatId, text: message })
      });

      const result = await response.json();
      console.log("Telegram response:", result);

      if (!response.ok || !result.ok) {
        throw new Error(result.description || "Telegram send failed");
      }

      alert("Yêu cầu đặt bàn đã được gửi. Nhà hàng sẽ liên hệ xác nhận sớm nhất.");
      onAddReservation(pendingBooking);
      setPendingBooking(null);
      
      // reset form
      setFormData({
        name: '',
        phone: '',
        date: new Date().toISOString().split('T')[0],
        time: '18:30',
        guests: '3-4',
        area: 'Sảnh chính gia đình',
        notes: ''
      });
    } catch (error) {
      alert("Có lỗi khi gửi đặt bàn. Vui lòng thử lại hoặc liên hệ nhà hàng qua số " + siteConfig.zaloPhone + ".");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-xl bg-[#f6f3f2] border-y border-[#c3c8c1]/30" id="dat-ban">
      <div className="max-w-4xl mx-auto px-gutter">
        <div className="bg-white p-6 md:p-lg rounded-xl ambient-shadow border border-[#c3c8c1]/30">
          <div className="text-center mb-lg flex flex-col items-center">
            <span className="font-label-md text-label-md text-[#735c00] uppercase tracking-widest mb-sm">
              Đặt Bàn
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#061b0e]">
              Đặt bàn trực tuyến
            </h2>
            <div className="w-16 h-[1px] bg-[#735c00] mt-md mb-md"></div>
            <p className="text-[#434843] font-body-md text-body-md">
              Vui lòng điền thông tin dưới đây, chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="name">
                  Họ và tên *
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2}
                  maxLength={80}
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="phone">
                  Số điện thoại *
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                  id="phone" 
                  name="phone" 
                  required 
                  maxLength={10}
                  pattern="0[0-9]{9}"
                  type="tel"
                  placeholder="Ví dụ: 0912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div>
                <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="date">
                  Ngày *
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                  id="date" 
                  name="date" 
                  required 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="time">
                  Giờ *
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                  id="time" 
                  name="time" 
                  required 
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="guests">
                  Số khách *
                </label>
                <select 
                  className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                  id="guests" 
                  name="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  <option value="1-2">1 - 2 người</option>
                  <option value="3-4">3 - 4 người</option>
                  <option value="5-8">5 - 8 người</option>
                  <option value="8+">Trên 8 người (Phòng tiệc)</option>
                </select>
              </div>
            </div>

            {/* Area preference */}
            <div>
              <label className="block font-label-md text-label-md text-[#061b0e] mb-xs">
                Khu vực ưu tiên
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1">
                {['Sảnh chính gia đình', 'Góc lãng mạn cặp đôi', 'Phòng VIP doanh nhân'].map((areaName) => (
                  <button
                    type="button"
                    key={areaName}
                    onClick={() => setFormData({ ...formData, area: areaName })}
                    className={`py-2 px-3 text-xs font-label-md rounded border text-center transition-all ${
                      formData.area === areaName
                        ? 'border-[#735c00] bg-[#735c00]/10 text-[#735c00] font-bold'
                        : 'border-[#c3c8c1] text-[#434843] hover:border-[#061b0e]'
                    }`}
                  >
                    {areaName}
                  </button>
                ))}
              </div>
            </div>

            {/* Pre-ordered items summary if any */}
            {preOrderedDishes.length > 0 && (
              <div className="p-4 bg-[#f0eded] rounded-lg border border-[#c3c8c1]/40 my-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-sm text-[#061b0e] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#735c00] text-base">restaurant</span>
                    Món ăn đặt trước kèm bàn ({preOrderedDishes.length} món)
                  </span>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {preOrderedDishes.map(({ item, quantity }) => (
                    <div key={item.id} className="flex items-center justify-between text-xs bg-white p-2 rounded border border-[#c3c8c1]/30">
                      <div className="flex items-center gap-2">
                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
                        <div>
                          <div className="font-semibold text-[#061b0e]">{item.name}</div>
                          <div className="text-[#735c00]">{item.priceFormatted}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          type="button"
                          onClick={() => onUpdatePreOrderQuantity(item.id, -1)}
                          className="w-5 h-5 rounded bg-[#f0eded] text-center text-sm font-bold flex items-center justify-center hover:bg-[#e4e2e1]"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs">{quantity}</span>
                        <button 
                          type="button"
                          onClick={() => onUpdatePreOrderQuantity(item.id, 1)}
                          className="w-5 h-5 rounded bg-[#f0eded] text-center text-sm font-bold flex items-center justify-center hover:bg-[#e4e2e1]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block font-label-md text-label-md text-[#061b0e] mb-xs" htmlFor="notes">
                Ghi chú (Không bắt buộc)
              </label>
              <textarea 
                className="w-full bg-transparent border-0 border-b-[1px] border-[#737973] focus:border-[#735c00] focus:ring-0 px-0 py-sm font-body-md text-body-md text-[#1b1c1c] transition-colors outline-none" 
                id="notes" 
                name="notes" 
                maxLength={300}
                placeholder="Yêu cầu đặc biệt về chỗ ngồi, trang trí sinh nhật, dị ứng thức ăn..." 
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>

            <div className="pt-sm text-center">
              <button 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#061b0e] text-[#ffe088] font-label-md text-label-md rounded hover:-translate-y-0.5 transition-transform duration-300 w-full md:w-auto shadow-md border border-[#ffe088]/20 cursor-pointer" 
                type="submit"
              >
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                Đặt bàn
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {pendingBooking && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fcf9f8] max-w-[512px] w-full rounded-xl p-6 md:p-8 shadow-2xl border border-[#735c00]/30 animate-fade-in text-center">
            <h3 className="font-headline-sm text-2xl text-[#061b0e] mb-2">
              Xác nhận đặt bàn
            </h3>
            <p className="text-sm text-[#434843] mb-6">
              Bạn muốn gửi yêu cầu đặt bàn tới {siteConfig.restaurantName}?
            </p>

            <div className="bg-white p-4 rounded-lg border border-[#c3c8c1]/40 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="text-[#737973]">Khách hàng:</span>
                <span className="font-semibold text-[#061b0e]">{pendingBooking.name} ({pendingBooking.phone})</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="text-[#737973]">Thời gian:</span>
                <span className="font-semibold text-[#061b0e]">{pendingBooking.time} - Ngày {pendingBooking.date}</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="text-[#737973]">Số người:</span>
                <span className="font-semibold text-[#061b0e]">{pendingBooking.guests}</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="text-[#737973]">Khu vực:</span>
                <span className="font-semibold text-[#735c00]">{pendingBooking.area}</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="text-[#737973]">Ghi chú:</span>
                <span className="font-semibold text-[#061b0e]">{pendingBooking.notes || "Không có"}</span>
              </div>
              {pendingBooking.preOrderedItems && pendingBooking.preOrderedItems.length > 0 && (
                <div>
                  <span className="text-[#737973] block mb-1">Món ăn đã chọn:</span>
                  <div className="space-y-1 pl-2">
                    {pendingBooking.preOrderedItems.map(({ item, quantity }) => (
                      <div key={item.id} className="flex justify-between text-[#061b0e]">
                        <span>• {item.name} x{quantity}</span>
                        <span>{item.priceFormatted}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-[#77736a] italic mb-6">
              Nhà hàng sẽ liên hệ lại để xác nhận lần cuối.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setPendingBooking(null)}
                className="px-6 py-2 bg-white text-[#434843] rounded font-label-md text-sm border border-[#c3c8c1] hover:bg-[#f0eded] transition-colors"
                disabled={isSubmitting}
              >
                Hủy
              </button>
              <button
                onClick={confirmBooking}
                className="px-6 py-2 bg-[#061b0e] text-[#ffe088] rounded font-label-md text-sm hover:bg-[#1b3022] transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Xác nhận đặt bàn"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
