import { Award, Trophy, Store, LucideIcon } from "lucide-react";

import iscaFile from "@/assets/isca_file_gorgonzola_1777757530486.png";
import salpicaoImg from "@/assets/salpicao_1777757547699.png";
import bacalhauImg from "@/assets/bacalhau_gratinado_1777757561560.png";
import fileMadeiraImg from "@/assets/file_madeira_1777757575608.png";
import camaraoQueijosImg from "@/assets/camarao_queijos_1777757592945.png";
import arrozSalmaoImg from "@/assets/arroz_salmao_1777757609644.png";
import pescadaImg from "@/assets/pescada_portuguesa_1777757621820.png";
import frangoImg from "@/assets/frango_parmegiana_1777757633576.png";
import farofaImg from "@/assets/farofa_amendoas_1777757645636.png";

export type ProductOption = {
  id: string;
  name: string;
};

export type ProductSizeOption = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
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
  requiredSizes?: ProductSizeOption[];
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
      name: "MESA DE MÃE",
      price: "R$ 1.279,00",
      priceValue: 1279,
      desc: "Menu completo para até 15 pessoas, com clássicos irresistíveis.",
      image: "/imagens_cardapio/Mesa de Mãe.jpeg",
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
      name: "DOMINGO COM A MÃE",
      price: "R$ 1.379,00",
      priceValue: 1379,
      desc: "Menu especial com Bacalhau e Camarão para 15 pessoas.",
      image: "/imagens_cardapio/Domingo com a Mãe .jpeg",
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
      name: "MÃE MERECE",
      price: "R$ 1.479,00",
      priceValue: 1479,
      desc: "Sofisticação com Filé Mignon e Camarão para grandes encontros.",
      image: "/imagens_cardapio/Mãe Merece.jpeg",
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
      name: "DO JEITO QUE A MÃE FAZ",
      price: "R$ 1.589,00",
      priceValue: 1589,
      desc: "O banquete supremo com Pescada e Camarão para 15 convidados.",
      image: "/imagens_cardapio/do Jeito que a Mãe faz.jpeg",
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
  
  monteSeu: [
    {
      id: "a1",
      name: "Isca de Filé ao Molho Gorgonzola",
      price: "A partir de R$ 325,90",
      priceValue: 325.90,
      desc: "Deliciosas iscas de filé mignon ao molho gorgonzola.",
      image: iscaFile,
      requiredSizes: [
        { id: "sz1", name: "1kg", price: "R$ 325,90", priceValue: 325.90 },
        { id: "sz2", name: "2kg", price: "R$ 600,00", priceValue: 600 },
      ]
    },
    {
      id: "a2",
      name: "Salpicão",
      price: "A partir de R$ 125,90",
      priceValue: 125.90,
      desc: "Salpicão tradicional cremoso, perfeito para acompanhar.",
      image: salpicaoImg,
      requiredSizes: [
        { id: "sz1", name: "1kg", price: "R$ 125,90", priceValue: 125.90 },
        { id: "sz2", name: "2kg", price: "R$ 200,00", priceValue: 200 },
      ]
    },
    {
      id: "a3",
      name: "Bacalhau Gratinado",
      price: "R$ 650,00",
      priceValue: 650,
      desc: "Bacalhau nobre gratinado com batatas e creme especial.",
      image: bacalhauImg,
      requiredSizes: [
        { id: "sz1", name: "Apenas 2kg", price: "R$ 650,00", priceValue: 650 },
      ]
    },
    {
      id: "a4",
      name: "Filé ao Molho Madeira",
      price: "R$ 650,00",
      priceValue: 650,
      desc: "Medalhões de filé mignon ao clássico molho madeira.",
      image: fileMadeiraImg,
      requiredSizes: [
        { id: "sz1", name: "Apenas 2kg", price: "R$ 650,00", priceValue: 650 },
      ]
    },
    {
      id: "a5",
      name: "Camarão aos 4 Queijos",
      price: "R$ 540,00",
      priceValue: 540,
      desc: "Camarões graúdos envoltos em um cremoso molho quatro queijos.",
      image: camaraoQueijosImg,
      requiredSizes: [
        { id: "sz1", name: "Apenas 2kg", price: "R$ 540,00", priceValue: 540 },
      ]
    },
    {
      id: "a6",
      name: "Arroz de Salmão",
      price: "A partir de R$ 300,00",
      priceValue: 300,
      desc: "Arroz soltinho cozido com lascas de salmão fresco e temperos finos.",
      image: arrozSalmaoImg,
      requiredSizes: [
        { id: "sz1", name: "2kg", price: "R$ 300,00", priceValue: 300 },
        { id: "sz2", name: "3kg", price: "R$ 450,00", priceValue: 450 },
      ]
    },
    {
      id: "a7",
      name: "Pescada à Portuguesa",
      price: "R$ 500,00",
      priceValue: 500,
      desc: "Pescada amarela ao estilo português, com batatas, cebola, pimentões e azeite.",
      image: pescadaImg,
      requiredSizes: [
        { id: "sz1", name: "Apenas 2kg", price: "R$ 500,00", priceValue: 500 },
      ]
    },
    {
      id: "a8",
      name: "Frango à Parmegiana",
      price: "R$ 400,00",
      priceValue: 400,
      desc: "Filés de frango empanados, cobertos com muito queijo e molho de tomate artesanal.",
      image: frangoImg,
      requiredSizes: [
        { id: "sz1", name: "Apenas 2kg", price: "R$ 400,00", priceValue: 400 },
      ]
    },
    {
      id: "a9",
      name: "Farofa Cítrica de Amêndoas",
      price: "A partir de R$ 100,00",
      priceValue: 100,
      desc: "Nossa famosa farofa cítrica com lascas de amêndoas tostadas.",
      image: farofaImg,
      requiredSizes: [
        { id: "sz1", name: "450g", price: "R$ 100,00", priceValue: 100 },
        { id: "sz2", name: "900g", price: "R$ 200,00", priceValue: 200 },
      ]
    },
  ] as Product[],
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
