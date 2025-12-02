"use client";

import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 "
      onClick={onClose}
    >
      <div
        className="bg-white/90 rounded-2xl shadow-lg max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '80vh',
                width: '90%',
                 backgroundImage: "url('/verified-bg.png')",
         }}
      >
        <div className="relative">
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-600 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto" style={{ maxHeight: '72vh' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
