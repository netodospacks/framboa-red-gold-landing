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
  serves?: number;
  pricePerPerson?: number;
  consumption?: string;
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
      price: "R$ 325,90",
      priceValue: 325.90,
      desc: "Deliciosas iscas de filé mignon ao molho gorgonzola.",
      image: iscaFile,
      requiredSizes: [
        { id: "sz1", name: "1kg", price: "R$ 325,90", priceValue: 325.90, serves: 4, pricePerPerson: 81.25, consumption: "+250g" },
        { id: "sz2", name: "2kg", price: "R$ 600,00", priceValue: 600, serves: 8, pricePerPerson: 75.00, consumption: "+250g" },
      ]
    },
    {
      id: "a2",
      name: "Salpicão",
      price: "R$ 125,90",
      priceValue: 125.90,
      desc: "Salpicão tradicional cremoso, perfeito para acompanhar.",
      image: salpicaoImg,
      requiredSizes: [
        { id: "sz1", name: "1kg", price: "R$ 125,90", priceValue: 125.90, serves: 4, pricePerPerson: 31.48, consumption: "250g" },
        { id: "sz2", name: "2kg", price: "R$ 200,00", priceValue: 200, serves: 8, pricePerPerson: 25.00, consumption: "250g" },
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
        { id: "sz1", name: "2kg", price: "R$ 650,00", priceValue: 650, serves: 6, pricePerPerson: 108.33, consumption: "+300g" },
      ]
    },
    {
      id: "a4",
      name: "Filé ao Molho Madeira",
      price: "R$ 650,00",
      priceValue: 650,
      desc: "Filé mignon ao clássico molho madeira.",
      image: fileMadeiraImg,
      requiredSizes: [
        { id: "sz1", name: "2kg", price: "R$ 650,00", priceValue: 650, serves: 6, pricePerPerson: 108.33, consumption: "+300g" },
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
        { id: "sz1", name: "2kg", price: "R$ 540,00", priceValue: 540, serves: 6, pricePerPerson: 90.00, consumption: "+300g" },
      ]
    },
    {
      id: "a6",
      name: "Arroz de Salmão",
      price: "R$ 300,00",
      priceValue: 300,
      desc: "Arroz soltinho cozido with lascas de salmão fresco e temperos finos.",
      image: arrozSalmaoImg,
      requiredSizes: [
        { id: "sz1", name: "2kg", price: "R$ 300,00", priceValue: 300, serves: 6, pricePerPerson: 50.00, consumption: "+300g" },
        { id: "sz2", name: "3kg", price: "R$ 450,00", priceValue: 450, serves: 9, pricePerPerson: 50.00, consumption: "+300g" },
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
        { id: "sz1", name: "2kg", price: "R$ 500,00", priceValue: 500, serves: 6, pricePerPerson: 83.33, consumption: "+300g" },
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
        { id: "sz1", name: "2kg", price: "R$ 400,00", priceValue: 400, serves: 6, pricePerPerson: 66.67, consumption: "+300g" },
      ]
    },
    {
      id: "a9",
      name: "Farofa Cítrica de Amêndoas",
      price: "R$ 100,00",
      priceValue: 100,
      desc: "Nossa famosa farofa cítrica com lascas de amêndoas tostadas.",
      image: farofaImg,
      requiredSizes: [
        { id: "sz1", name: "450g", price: "R$ 100,00", priceValue: 100, serves: 6, pricePerPerson: 16.66, consumption: "75g" },
        { id: "sz2", name: "900g", price: "R$ 200,00", priceValue: 200, serves: 12, pricePerPerson: 16.66, consumption: "75g" },
      ]
    },
  ] as Product[],

  combosSetePessoas: [
    {
      id: "7-4",
      name: "Mãe, Porto Seguro",
      price: "R$ 750,00",
      priceValue: 750,
      desc: "O clássico perfeito para reunir a família com o melhor do bacalhau.",
      image: "/imagens_cardapio/cardapio4.jpeg",
      serves: 7,
      deposit: 75,
      pricePerPerson: 107.14,
      badge: "Mais pedido",
      includedItems: [
        "Bacalhau Gratinado (1 kg)",
        "Salpicão (1 kg)",
        "Arroz Branco (1 kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "7-1",
      name: "Menu Cuidado de Mãe",
      price: "R$ 650,00",
      priceValue: 650,
      desc: "O sabor caseiro elevado ao nível premium com nosso frango à parmegiana.",
      image: "/imagens_cardapio/cardapio1.jpeg",
      serves: 7,
      deposit: 85,
      pricePerPerson: 92.86,
      includedItems: [
        "Frango à Parmegiana (1 kg)",
        "Salpicão (1 kg)",
        "Arroz Branco (1 kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "7-2",
      name: "Menu Homenagem à Mãe",
      price: "R$ 670,00",
      priceValue: 670,
      desc: "Uma explosão de cremosidade com camarões graúdos e queijos nobres.",
      image: "/imagens_cardapio/cardapio2.jpeg",
      serves: 7,
      deposit: 70,
      pricePerPerson: 95.71,
      includedItems: [
        "Camarão 4 Queijos (1 kg)",
        "Salpicão (1 kg)",
        "Arroz Branco (1 kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "7-3",
      name: "Menu Mãe, Nossa Rainha",
      price: "R$ 790,00",
      priceValue: 790,
      desc: "Sofisticação e sabor intenso com nosso filé mignon selecionado.",
      image: "/imagens_cardapio/cardapio3.jpeg",
      serves: 7,
      deposit: 75,
      pricePerPerson: 112.86,
      includedItems: [
        "Filé ao Molho Madeira (1 kg)",
        "Salpicão (1 kg)",
        "Arroz de Queijo (1 kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
    {
      id: "7-5",
      name: "Menu Tempero de Mãe",
      price: "R$ 750,00",
      priceValue: 750,
      desc: "A união nobre da pescada amarela com o sofisticado arroz de salmão.",
      image: "/imagens_cardapio/cardapio5.jpeg",
      serves: 7,
      deposit: 75,
      pricePerPerson: 107.14,
      includedItems: [
        "Pescada Amarela (1 kg)",
        "Salpicão (1 kg)",
        "Arroz de Salmão (1 kg)",
      ],
      requiredStarters: defaultStarters,
      requiredDesserts: defaultDesserts,
    },
  ] as (Product & { badge?: string })[],
};

export const menuTabs = [
  { id: "cardapio_7_pessoas", label: "CARDÁPIO 07 PESSOAS" },
  { id: "combos", label: "CARDÁPIO 15 PESSOAS" },
  { id: "monte", label: "PEDIDO AVULSO" },
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

export const bairrosJP = [
  "Altiplano Cabo Branco",
  "Bancários",
  "Bessa",
  "Brisamar",
  "Cabo Branco",
  "Castelo Branco",
  "Centro",
  "Cristo Redentor",
  "Cruz das Armas",
  "Distrito Industrial",
  "Ernani Sátiro",
  "Expedicionários",
  "Funcionários",
  "Geisel",
  "Gramame",
  "Ilha do Bispo",
  "Indústrias",
  "Jaguaribe",
  "Jardim Cidade Universitária",
  "José Américo",
  "Mandacaru",
  "Manaíra",
  "Miramar",
  "Muçumagro",
  "Oitizeiro",
  "Padre Zé",
  "Paratibe",
  "Pedro Gondim",
  "Planalto da Boa Esperança",
  "Portal do Sol",
  "Rangel",
  "Roger",
  "São José",
  "Tambaú",
  "Torre",
  "Valentina Figueiredo",
  "Varadouro",
] as const;
