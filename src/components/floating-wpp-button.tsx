import React from "react";

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5592986022225?text=Ol%C3%A1%21+%F0%9F%98%8A+Gostaria+de+saber+mais+e+agendar+uma+sess%C3%A3o"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-600
        hover:bg-green-700
        rounded-full
        w-14
        h-14
        flex
        items-center
        justify-center
        shadow-lg
        transition-colors
        text-white
        text-3xl
      "
      aria-label="WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}

export default FloatingWhatsAppButton;
