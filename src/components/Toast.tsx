import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#061b0e] text-[#ffe088] px-5 py-3 rounded-lg shadow-xl border border-[#735c00]/50 flex items-center gap-3 animate-slide-up text-sm font-label-md">
      <span className="material-symbols-outlined text-[#ffe088]">check_circle</span>
      <span>{message}</span>
      <button onClick={onClose} className="text-white/60 hover:text-white ml-2">
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
