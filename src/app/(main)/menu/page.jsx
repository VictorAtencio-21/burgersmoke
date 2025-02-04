import Menu from "@/components/menu/Menu";

// Menu data
const menu = [
  {
    id: 1,
    name: "Hamburguesa Urbana",
    description: "Carne Angus, cebollas caramelizadas, queso artesanal",
    price: 14.99,
    ingredients: [
      { id: 1, name: "Carne Angus", default: true },
      { id: 2, name: "Cebollas caramelizadas", default: true },
      { id: 3, name: "Queso artesanal", default: true },
      { id: 4, name: "Lechuga", default: true },
      { id: 5, name: "Tomate", default: true },
      { id: 6, name: "Salsa especial", default: true },
    ],
  },
  {
    id: 2,
    name: "Ensalada Cityscape",
    description: "Verduras frescas, vegetales asados, vinagreta de cítricos",
    price: 12.99,
    ingredients: [
      { id: 7, name: "Verduras mixtas", default: true },
      { id: 8, name: "Pimientos asados", default: true },
      { id: 9, name: "Calabacín asado", default: true },
      { id: 10, name: "Tomates cherry", default: true },
      { id: 11, name: "Vinagreta de cítricos", default: true },
      { id: 12, name: "Crutones", default: true },
    ],
  },
  {
    id: 3,
    name: "Pasta Metropolis",
    description: "Linguine casero, hongos silvestres, aceite de trufa",
    price: 16.99,
    ingredients: [
      { id: 13, name: "Linguine casero", default: true },
      { id: 14, name: "Hongos silvestres", default: true },
      { id: 15, name: "Aceite de trufa", default: true },
      { id: 16, name: "Queso parmesano", default: true },
      { id: 17, name: "Hierbas frescas", default: true },
      { id: 18, name: "Ajo", default: true },
    ],
  },
];

export default function MenuPage() {
  return <Menu menu={menu} />;
}
