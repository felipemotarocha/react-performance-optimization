export interface Product {
  id: string;
  name: string;
  price: number;
}

export const generateProducts = (): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= 500; i++) {
    products.push({
      id: i.toString(),
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 500) + 1,
    });
  }

  return products;
};

export const products = [
  { id: 1, name: "iPhone 12", price: 999 },
  { id: 2, name: "Samsung Galaxy S21", price: 799 },
  { id: 3, name: "Google Pixel 5", price: 699 },
  { id: 4, name: "OnePlus 9", price: 729 },
  { id: 5, name: "Xiaomi Mi 11", price: 749 },
  { id: 6, name: "Sony Xperia 5 II", price: 949 },
  { id: 7, name: "LG Wing", price: 999 },
  { id: 8, name: "Motorola Moto G Power (2021)", price: 249 },
  { id: 9, name: "Nokia 5.4", price: 249 },
  { id: 10, name: "BlackBerry KEY2 LE", price: 449 },
];
