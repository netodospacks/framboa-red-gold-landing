import { Award, Trophy, Store, LucideIcon } from "lucide-react";
import comboFamilia from "@/assets/combo-familia.jpg";
import comboEspecial from "@/assets/combo-especial.jpg";
import comboTradicional from "@/assets/combo-tradicional.jpg";

export type ProductOption = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  desc: string;
  image: string;
  serves?: number;
  deposit?: number;
  pricePerPerson?: number;
  includedItems?: string[];
  requiredStarters?: ProductOption[];
  requiredDesserts?: ProductOption[];
};

const defaultStarters: ProductOption[] = [
  { id: "e1", name: "Isca de Filé ao Molho Gorgonzola com torradas" },
  { id: "e2", name: "Burrata com tomate confit e torradas" },
];

const defaultDesserts: ProductOption[] = [
  { id: "s1", name: "Pudim de Leite" },
  { id: "s2", name: "Tesouro dos Deuses (panna cotta com compota de caju e redução de balsâmico)" },
];

export const menuData = {
  combos: [
    {
      id: "1",
      name: "Cardápio 1",
      price: "R$ 1.279,00",
      priceValue: 1279,
      desc: "Menu completo para até 15 pessoas, com clássicos irresistíveis.",
      image: comboFamilia,
      serves: 15,
      deposit: 110,
      pricePerPerson: 85.27,
      includedItems: [
        "Frango Parmegiana (2kg)",
        "Camarão 4 Queijos (2kg)",
        "Salpicão (2kg)",
        "Arroz Branco (2kg)",
        "Batata Sauté (2kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "2",
      name: "Cardápio 2",
      price: "R$ 1.379,00",
      priceValue: 1379,
      desc: "Menu especial com Bacalhau e Camarão para 15 pessoas.",
      image: comboEspecial,
      serves: 15,
      deposit: 110,
      pricePerPerson: 91.93,
      includedItems: [
        "Bacalhau Gratinado (2kg)",
        "Camarão 4 Queijos (2kg)",
        "Salpicão (2kg)",
        "Arroz Branco (2kg)",
        "Batata Sauté (2kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "3",
      name: "Cardápio 3",
      price: "R$ 1.479,00",
      priceValue: 1479,
      desc: "Sofisticação com Filé Mignon e Camarão para grandes encontros.",
      image: comboTradicional,
      serves: 15,
      deposit: 110,
      pricePerPerson: 98.60,
      includedItems: [
        "Filé Mignon ao Molho Madeira (2kg)",
        "Camarão 4 Queijos (2kg)",
        "Salpicão (2kg)",
        "Arroz com Queijo (2kg)",
        "Batata Sauté (2kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "4",
      name: "Cardápio 4",
      price: "R$ 1.589,00",
      priceValue: 1589,
      desc: "O banquete supremo com Pescada e Camarão para 15 convidados.",
      image: comboEspecial,
      serves: 15,
      deposit: 110,
      pricePerPerson: 105.93,
      includedItems: [
        "Pescada Amarela (2kg)",
        "Camarão 4 Queijos (2kg)",
        "Salpicão (2kg)",
        "Arroz de Salmão (3kg)",
        "Farofa Cítrica (480g)",
        "Batata Sauté (2kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
  ] as Product[],
  
  monteSeu: [] as Product[],
};

export const menuTabs = [
  { id: "combos", label: "CARDÁPIO ESPECIAL" },
  { id: "monte", label: "MONTE SEU CARDÁPIO" },
] as const;

export type AwardCard = {
  icon: LucideIcon;
  title: string;
  sub: string;
  desc: string;
};

export const awardsData: AwardCard[] = [
  {
    icon: Trophy,
    title: "Melhor restaurante a quilo do Brasil",
    sub: "Eleito em 2024",
    desc: "Reconhecimento nacional pelo padrão de qualidade e sabor inconfundível.",
  },
  {
    icon: Award,
    title: "Melhor restaurante da Paraíba",
    sub: "2024 e 2025",
    desc: "Bicampeão consecutivo na preferência do público paraibano.",
  },
  {
    icon: Store,
    title: "Entrega ou retirada no Manaíra Shopping",
    sub: "Unidade Exclusiva",
    desc: "Comodidade para receber em casa ou retirar rapidamente na nossa loja.",
  },
];
