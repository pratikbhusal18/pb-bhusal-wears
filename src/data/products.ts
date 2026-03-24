export interface Product {
  id: string;
  name: string;
  category: "tshirts" | "hoodies" | "bottoms" | "accessories";
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  badge?: string;
}

export const products: Product[] = [
  { id: "1", name: "Sunset Gradient Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 34.99, emoji: "👕", badge: "NEW" },
  { id: "2", name: "Chill Wave Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 29.99, emoji: "👕" },
  { id: "3", name: "PB Logo Essential Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 27.99, emoji: "👕", badge: "BESTSELLER" },
  { id: "4", name: "Retro Color Block Hoodie", category: "hoodies", categoryLabel: "Hoodies", price: 64.99, oldPrice: 79.99, emoji: "🧥" },
  { id: "5", name: "Cozy Oversized Hoodie", category: "hoodies", categoryLabel: "Hoodies", price: 59.99, emoji: "🧥", badge: "NEW" },
  { id: "6", name: "Pastel Dream Zip-Up", category: "hoodies", categoryLabel: "Hoodies", price: 69.99, emoji: "🧥" },
  { id: "7", name: "Cloud Comfort Joggers", category: "bottoms", categoryLabel: "Bottoms", price: 54.99, emoji: "👖", badge: "BESTSELLER" },
  { id: "8", name: "Weekend Cargo Shorts", category: "bottoms", categoryLabel: "Bottoms", price: 39.99, emoji: "👖" },
  { id: "9", name: "PB Classic Cap", category: "accessories", categoryLabel: "Accessories", price: 24.99, emoji: "🧢", badge: "HOT" },
  { id: "10", name: "Rainbow Beanie", category: "accessories", categoryLabel: "Accessories", price: 19.99, emoji: "🧣" },
  { id: "11", name: "PB Adventure Tote", category: "accessories", categoryLabel: "Accessories", price: 29.99, emoji: "🎒" },
  { id: "12", name: "Fun Pattern Socks (3-Pack)", category: "accessories", categoryLabel: "Accessories", price: 14.99, emoji: "🧦" },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Bottoms", "Accessories"] as const;

export const categoryMap: Record<string, string | null> = {
  All: null,
  "T-Shirts": "tshirts",
  Hoodies: "hoodies",
  Bottoms: "bottoms",
  Accessories: "accessories",
};
