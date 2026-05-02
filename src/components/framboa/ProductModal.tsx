import { useState, useEffect } from "react";
import { X, Check, Info, Users } from "lucide-react";
import { Product, ProductOption, ProductSizeOption } from "@/config/data";
import { useCart } from "@/hooks/use-cart";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, entrada?: ProductOption, sobremesa?: ProductOption, tamanho?: ProductSizeOption) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [selectedEntrada, setSelectedEntrada] = useState<ProductOption | undefined>();
  const [selectedSobremesa, setSelectedSobremesa] = useState<ProductOption | undefined>();
  const [selectedTamanho, setSelectedTamanho] = useState<ProductSizeOption | undefined>();
  const { hasCombo } = useCart();

  // Reset states when product changes
  useEffect(() => {
    if (isOpen) {
      setSelectedEntrada(undefined);
      setSelectedSobremesa(undefined);
      setSelectedTamanho(undefined);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const isCombo = !!product.serves;
  const blockDueToExistingCombo = isCombo && hasCombo;

  const canAdd =
    !blockDueToExistingCombo &&
    (product.requiredStarters ? selectedEntrada !== undefined : true) &&
    (product.requiredDesserts ? selectedSobremesa !== undefined : true) &&
    (product.requiredSizes ? selectedTamanho !== undefined : true);

  const handleAdd = () => {
    if (canAdd) {
      onAddToCart(product, selectedEntrada, selectedSobremesa, selectedTamanho);
      onClose();
    }
  };

  const displayPrice = selectedTamanho ? selectedTamanho.price : product.price;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 bottom-0 z-[100] flex max-h-[90vh] flex-col overflow-hidden rounded-t-3xl bg-background shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg md:rounded-3xl animate-in slide-in-from-bottom-full md:slide-in-from-bottom-0 md:zoom-in-95 duration-300">
        
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header Image */}
          {!product.requiredSizes && (
            <div className="relative h-48 w-full md:h-56 shrink-0">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}

          {/* Info Section */}
          <div className="px-5 py-5">
            <h2 className="font-display text-2xl font-bold leading-tight text-foreground">{product.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{product.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.serves && (
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  <Users className="h-3.5 w-3.5" />
                  Serve até {product.serves} pessoas
                </div>
              )}
              {product.pricePerPerson && (
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  <Info className="h-3.5 w-3.5" />
                  R$ {product.pricePerPerson.toFixed(2).replace(".", ",")} / pessoa
                </div>
              )}
            </div>

            {/* Included Items */}
            {product.includedItems && product.includedItems.length > 0 && (
              <div className="mt-6 rounded-2xl bg-card border border-border/50 p-4">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Itens Inclusos</h3>
                <ul className="space-y-2">
                  {product.includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Options: Sizes */}
          {product.requiredSizes && product.requiredSizes.length > 0 && (
            <div className="mt-2 border-t-8 border-secondary px-5 py-5">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Tamanho</h3>
                  <p className="text-sm text-muted-foreground">Escolha 1 opção</p>
                </div>
                <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent uppercase">
                  Obrigatório
                </span>
              </div>
              <div className="space-y-3">
                {product.requiredSizes.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-200 ${
                      selectedTamanho?.id === opt.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border/50 bg-card hover:bg-secondary/30"
                    }`}
                    onClick={() => setSelectedTamanho(opt)}
                  >
                    <div>
                      <span className="font-medium text-sm md:text-base pr-4 block">{opt.name}</span>
                      <span className="text-sm text-muted-foreground">{opt.price}</span>
                    </div>
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selectedTamanho?.id === opt.id ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                      {selectedTamanho?.id === opt.id && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Options: Starters */}
          {product.requiredStarters && product.requiredStarters.length > 0 && (
            <div className="mt-2 border-t-8 border-secondary px-5 py-5">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Entrada</h3>
                  <p className="text-sm text-muted-foreground">Escolha 1 opção</p>
                </div>
                <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent uppercase">
                  Obrigatório
                </span>
              </div>
              <div className="space-y-3">
                {product.requiredStarters.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-200 ${
                      selectedEntrada?.id === opt.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border/50 bg-card hover:bg-secondary/30"
                    }`}
                    onClick={() => setSelectedEntrada(opt)}
                  >
                    <span className="font-medium text-sm md:text-base pr-4">{opt.name}</span>
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selectedEntrada?.id === opt.id ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                      {selectedEntrada?.id === opt.id && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Options: Desserts */}
          {product.requiredDesserts && product.requiredDesserts.length > 0 && (
            <div className="mt-2 border-t-8 border-secondary px-5 py-5">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Sobremesa</h3>
                  <p className="text-sm text-muted-foreground">Escolha 1 opção</p>
                </div>
                <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent uppercase">
                  Obrigatório
                </span>
              </div>
              <div className="space-y-3">
                {product.requiredDesserts.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-200 ${
                      selectedSobremesa?.id === opt.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border/50 bg-card hover:bg-secondary/30"
                    }`}
                    onClick={() => setSelectedSobremesa(opt)}
                  >
                    <span className="font-medium text-sm md:text-base pr-4">{opt.name}</span>
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selectedSobremesa?.id === opt.id ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                      {selectedSobremesa?.id === opt.id && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Fixed Actions */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background px-5 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <button
            disabled={!canAdd}
            onClick={handleAdd}
            className={`flex w-full items-center justify-between rounded-full px-6 py-4 font-bold shadow-sm transition-all duration-300 ${
              canAdd
                ? "bg-gradient-primary text-primary-foreground hover:scale-[1.02] hover:shadow-wine active:scale-[0.98]"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-70"
            }`}
          >
            <span className="text-lg">
              {blockDueToExistingCombo ? "Limite de 1 cardápio atingido" : "Adicionar ao pedido"}
            </span>
            <span className="text-xl">{displayPrice}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
