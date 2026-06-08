import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, ChevronRight, ChefHat } from "lucide-react";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

// Dynamic pricing and FAQ options defined inside component


const MiniChefChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "Olá! Aqui é o mini Chef José! 👨‍🍳\n\nPreparamos o 'Amor de Cinema' com muito carinho para vocês. Tem alguma dúvida de como funciona?"
    }
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic date calculations
  const now = new Date();
  const dateJune9 = new Date(2026, 5, 9);
  const dateJune10 = new Date(2026, 5, 10);
  const dateJune11 = new Date(2026, 5, 11);
  const dateJune12 = new Date(2026, 5, 12);
  const dateJune12Deadline = new Date(2026, 5, 12, 11, 0, 0);

  const isBeforeJune10 = now < dateJune10;
  const isJune10 = now >= dateJune10 && now < dateJune11;
  const isJune11 = now >= dateJune11 && now < dateJune12;
  const isJune12BeforeDeadline = now >= dateJune12 && now < dateJune12Deadline;

  // PriceText
  let priceText = "R$ 299,90";
  if (isBeforeJune10) {
    priceText = "R$ 279,90";
  } else if (isJune10) {
    priceText = "R$ 289,90";
  } else {
    priceText = "R$ 299,90";
  }

  // FAQ option answer for promo deadline
  let promoDeadlineAnswer = "";
  if (isBeforeJune10) {
    const isJune9 = now >= dateJune9;
    promoDeadlineAnswer = isJune9
      ? `O valor promocional de R$ 279,90 é válido até hoje, dia 9 de Junho. Garanta o seu antes que o valor suba para R$ 289,90! ⏱️`
      : `O valor promocional de R$ 279,90 é válido até amanhã, dia 9 de Junho. Garanta o seu antes que o valor suba para R$ 289,90! ⏱️`;
  } else if (isJune10) {
    promoDeadlineAnswer = `Atualmente estamos no valor promocional de R$ 289,90, válido até hoje, dia 10 de Junho. Garanta o seu antes que o valor suba para R$ 299,90! ⏱️`;
  } else if (isJune11) {
    promoDeadlineAnswer = `Atualmente estamos no valor promocional de R$ 299,90, válido até hoje, dia 11 de Junho. Garanta o seu antes que as encomendas encerrem amanhã! ⏱️`;
  } else if (isJune12BeforeDeadline) {
    promoDeadlineAnswer = `As encomendas estão se encerrando! Você tem até as 11:00h de hoje (12 de Junho) para garantir o seu menu por R$ 299,90. Corra! ⏱️`;
  } else {
    promoDeadlineAnswer = `As encomendas para o Menu Degustação Amor de Cinema já estão encerradas. Agradecemos a preferência! 🍷`;
  }

  const faqOptions = [
    {
      question: `O valor de ${priceText} é para o casal?`,
      answer: "Sim! 🍷 O valor contempla o Menu Degustação completo para 2 pessoas. São 5 momentos inesquecíveis para vocês dividirem."
    },
    {
      question: "Como funciona a retirada?",
      answer: "A retirada acontece no dia 12 de Junho, a partir das 15h30min, direto no Restaurante Framboá (no Manaíra Shopping)."
    },
    {
      question: "Preciso cozinhar em casa?",
      answer: "Não! O menu já vai praticamente pronto. Você receberá um pequeno guia super fácil apenas para finalizar a montagem dos pratos como um verdadeiro Chef! 👨‍🍳"
    },
    {
      question: "Até quando vai esse valor promocional?",
      answer: promoDeadlineAnswer
    }
  ];

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: { question: string; answer: string }) => {
    setShowOptions(false);
    
    // Add user question
    const newMessages = [
      ...messages,
      { id: Date.now(), role: "user" as const, text: option.question }
    ];
    setMessages(newMessages);

    // Simulate typing delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { id: Date.now() + 1, role: "bot" as const, text: option.answer }
      ]);
      
      // Show options again after a short delay
      setTimeout(() => setShowOptions(true), 1500);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#8B0000] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(139,0,0,0.4)] hover:bg-[#600000] hover:scale-110 transition-all flex items-center justify-center relative group animate-bounce"
        >
          <MessageCircle size={28} />
          
          {/* Notification dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#d4af37] border-2 border-white rounded-full animate-pulse" />
          
          {/* Tooltip hint */}
          <span className="absolute right-full mr-4 bg-white text-[#8B0000] text-xs font-bold px-3 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            Dúvidas? Fale comigo!
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[90vw] max-w-[360px] h-[550px] max-h-[85vh] bg-[#fdfbf7] rounded-2xl shadow-2xl border border-[#d4af37]/30 flex flex-col z-50 overflow-hidden transition-all duration-400 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-[#8B0000] text-white p-4 flex items-center justify-between shrink-0 shadow-md z-10 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
              <ChefHat size={20} className="text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Mini Chef José</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37]">Restaurante Framboá</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#fdfbf7] to-white relative">
          {/* Decorative watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <ChefHat size={120} />
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
              <div 
                className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#2C3E50] text-white rounded-tr-none' 
                    : 'bg-white border border-[#d4af37]/20 text-[#2C3E50] rounded-tl-none font-serif'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Options Area */}
        <div className="p-3 bg-white border-t border-[#d4af37]/20 shrink-0">
          {showOptions ? (
            <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-4 fade-in duration-300">
              <p className="text-[10px] text-center text-[#2C3E50]/50 font-bold uppercase tracking-widest mb-1">
                Escolha uma pergunta
              </p>
              {faqOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full text-left flex items-center justify-between bg-[#fdfbf7] hover:bg-[#8B0000]/5 border border-[#d4af37]/30 p-3 rounded-xl text-xs text-[#8B0000] font-semibold transition-colors group"
                >
                  <span className="truncate pr-2">{opt.question}</span>
                  <ChevronRight size={14} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3 text-[#d4af37]">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
              <span className="text-xs italic font-serif opacity-70">Chef digitando...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MiniChefChat;
