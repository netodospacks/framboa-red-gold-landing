import { X, Minus, Plus, Trash2, ShoppingBag, Truck, Store, MapPin, User, Phone as PhoneIcon } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { bairrosJP } from "@/config/data";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CartDrawer = () => {
  const {
    items,
    total,
    depositTotal,
    hasCombo,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [orderType, setOrderType] = useState<"retirada" | "entrega">("retirada");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const deliveryFee = orderType === "entrega" ? 30 : 0;
  const depositFee = depositTotal;
  const finalTotal = total + deliveryFee + depositFee;

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    if (!clientName.trim() || !clientPhone.trim()) {
      toast.error("Por favor, preencha seu nome e telefone");
      return;
    }

    if (orderType === "entrega") {
      if (!bairro) {
        toast.error("Por favor, selecione seu bairro");
        return;
      }
      if (!rua.trim() || !numero.trim()) {
        toast.error("Por favor, preencha rua e número");
        return;
      }
    }

    const separator = "----------------------------------------";
    let message = `${separator}\n\n`;
    message += `NOVO PEDIDO - RESTAURANTE FRAMBOÁ\n\n`;
    
    message += `DADOS DO CLIENTE:\n`;
    message += `Nome: ${clientName}\n`;
    message += `Telefone: ${clientPhone}\n\n`;
    
    if (orderType === "entrega") {
      message += `TIPO DE PEDIDO:\n`;
      message += `Entrega\n`;
      message += `Endereço: ${rua}, nº ${numero}\n`;
      if (complemento.trim()) {
        message += `Complemento: ${complemento}\n`;
      }
      message += `Bairro: ${bairro}\n\n`;
    } else {
      message += `TIPO DE PEDIDO:\n`;
      message += `Retirada\n\n`;
    }

    message += `${separator}\n\n`;
    message += `PEDIDO:\n\n`;
    
    items.forEach((item) => {
      const itemPrice = item.tamanho ? item.tamanho.priceValue : item.product.priceValue;
      message += `- ${item.product.name}\n`;
      message += `  Quantidade: ${item.quantity}\n`;
      
      if (item.tamanho) {
        message += `  Tamanho: ${item.tamanho.name}\n`;
      }
      if (item.entrada) {
        message += `  Entrada: ${item.entrada.name}\n`;
      }
      if (item.sobremesa) {
        message += `  Sobremesa: ${item.sobremesa.name}\n`;
      }
      message += `  Subtotal: R$ ${(itemPrice * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;
    });

    message += `${separator}\n\n`;
    message += `VALORES:\n\n`;
    message += `Subtotal dos itens: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    
    if (depositTotal > 0) {
      message += `Caução (Reembolsável): R$ ${depositTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    }
    
    if (orderType === "entrega") {
      message += `Taxa de entrega: R$ 30,00\n`;
    }
    
    message += `\nTOTAL FINAL: R$ ${finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;

    message += `${separator}\n\n`;
    message += `OBSERVAÇÃO:\n`;
    message += `Estou ciente da política de caução das travessas.\n\n`;
    message += `${separator}`;

    const whatsappNumber = "5583982309183";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
    toast.success("Pedido enviado com sucesso!");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Meu Pedido
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-muted-foreground">
              <ShoppingBag className="h-16 w-16 opacity-20" />
              <p className="text-center font-medium">
                Seu carrinho está vazio.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => {
                const itemPrice = item.tamanho ? item.tamanho.priceValue : item.product.priceValue;
                return (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/50">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-col">
                          <h3 className="font-bold leading-tight text-foreground line-clamp-2">
                            {item.product.name}
                          </h3>
                          {item.tamanho && (
                            <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              Tamanho: {item.tamanho.name}
                            </span>
                          )}
                          {item.entrada && (
                            <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              Entrada: {item.entrada.name}
                            </span>
                          )}
                          {item.sobremesa && (
                            <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              Sobremesa: {item.sobremesa.name}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-1 shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 rounded-full border border-border/50 px-3 py-1 text-sm font-semibold shadow-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            className="p-0.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            className="p-0.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-primary">
                          R$ {(itemPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Formulário de Dados */}
        {items.length > 0 && (
          <div className="border-t border-border/30 bg-muted/30 px-6 py-6 space-y-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <User className="h-4 w-4" /> Seus Dados
            </h3>
            
            <div className="grid gap-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Seu telefone (WhatsApp)"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 p-1 bg-background rounded-2xl border border-border/50">
              <button
                onClick={() => setOrderType("retirada")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                  orderType === "retirada" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Store className="h-4 w-4" /> Retirada
              </button>
              <button
                onClick={() => setOrderType("entrega")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                  orderType === "entrega" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Truck className="h-4 w-4" /> Entrega
              </button>
            </div>

            {orderType === "entrega" && (
              <div className="grid gap-3 animate-in slide-in-from-top-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled>Selecione seu bairro</option>
                    {bairrosJP.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rua / Avenida"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Comp. (opcional)"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/50 bg-card px-6 py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Subtotal dos itens</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              {depositFee > 0 && (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-sm text-primary font-bold">
                    <span>Caução (reembolsável)</span>
                    <span>R$ {depositFee.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground italic leading-tight">
                    Este valor será devolvido após a devolução das travessas
                  </span>
                </div>
              )}
              {orderType === "entrega" && (
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Taxa de Entrega</span>
                  <span>R$ 30,00</span>
                </div>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <span className="text-lg font-bold text-foreground">Total Final</span>
                <span className="font-display text-2xl font-black text-primary">
                  R$ {finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-card shadow-wine transition-smooth hover:scale-[1.02] active:scale-[0.98]"
            >
              Enviar Pedido via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
