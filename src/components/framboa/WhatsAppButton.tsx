const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5583982309183?text=Ol%C3%A1!%20Estou%20navegando%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20card%C3%A1pios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Framboá no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl transition-smooth hover:scale-110"
      style={{ background: "hsl(var(--whatsapp))" }}
    >
      <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: "hsl(var(--whatsapp))" }} />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.36c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.79-10.7 10.69 0 1.88.49 3.72 1.43 5.33L5 27l5.79-1.51a10.66 10.66 0 0 0 5.22 1.36h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.86-1.11-5.54-3.13-7.56a10.62 10.62 0 0 0-7.56-3.13z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;