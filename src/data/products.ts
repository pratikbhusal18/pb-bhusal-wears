export interface Product {
  id: string;
  name: string;
  category: "tshirts" | "hoodies" | "bottoms" | "accessories";
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  image: string;
  badge?: string;
  description: string;
  sizes: string[];
  colors: string[];
  related: string[];
}

export const products: Product[] = [
  {
    id: "1", name: "Everest Sunrise Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 34.99, emoji: "👕", image: "/products/sunset-tee.jpg", badge: "NEW",
    description: "Capture the golden glow of sunrise over the Himalayas. This premium organic cotton tee features a gradient inspired by the first light hitting snow-capped peaks. Relaxed fit, ultra-soft, and guaranteed to turn heads.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Sunrise Gold", "Glacier Blue", "Alpine Green"],
    related: ["2", "3", "9"],
  },
  {
    id: "2", name: "Sherpa Trail Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 29.99, emoji: "👕", image: "/products/chill-wave-tee.jpg",
    description: "Built for the trail and the city. This lightweight tee is inspired by the resilience of mountain guides — breathable cotton blend with moisture-wicking properties. Perfect for any altitude.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sky Blue", "Stone Grey", "Summit White"],
    related: ["1", "3", "9"],
  },
  {
    id: "3", name: "Base Camp Essential Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 27.99, emoji: "👕", image: "/products/pb-logo-tee.jpg", badge: "BESTSELLER",
    description: "Your go-to everyday tee, built like a base camp — reliable, comfortable, and always ready. Clean PB embroidery on premium heavyweight cotton. The foundation of every great outfit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Midnight Black", "Snow White", "Crimson Peak"],
    related: ["1", "2", "9"],
  },
  {
    id: "4", name: "Annapurna Color Block Hoodie", category: "hoodies", categoryLabel: "Hoodies",
    price: 64.99, oldPrice: 79.99, emoji: "🧥", image: "/products/retro-hoodie.jpg",
    description: "Bold color blocking inspired by the dramatic ridgelines of the Annapurna range. Premium fleece-lined interior, kangaroo pocket, and adjustable drawstring hood. The hoodie that conquers any weather.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Peak Crimson", "Ridge Blue", "Valley Gold"],
    related: ["5", "6", "7"],
  },
  {
    id: "5", name: "Yeti Oversized Hoodie", category: "hoodies", categoryLabel: "Hoodies",
    price: 59.99, emoji: "🧥", image: "/products/cozy-hoodie.jpg", badge: "NEW",
    description: "As cozy as a mythical mountain legend. Intentionally oversized with dropped shoulders and a boxy fit. Heavyweight organic cotton terry that gets softer every wash — you'll never want to come down from this cloud.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cloud Grey", "Snowdrift", "Misty Rose"],
    related: ["4", "6", "7"],
  },
  {
    id: "6", name: "Prayer Flag Zip-Up", category: "hoodies", categoryLabel: "Hoodies",
    price: 69.99, emoji: "🧥", image: "/products/pastel-zipup.jpg",
    description: "A dreamy zip-up with color tones inspired by mountain prayer flags fluttering in alpine winds. Full-length YKK zipper, two side pockets, and gradient dye that makes every piece one-of-a-kind.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Flag Blue", "Saffron Glow", "Sage Wind"],
    related: ["4", "5", "7"],
  },
  {
    id: "7", name: "Cloud Walker Joggers", category: "bottoms", categoryLabel: "Bottoms",
    price: 54.99, emoji: "👖", image: "/products/cloud-joggers.jpg", badge: "BESTSELLER",
    description: "Walk among the clouds. Tapered fit with elastic waistband, deep pockets, and ankle cuffs. The brushed fleece interior is so soft it feels like floating above the valley floor.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal Ridge", "Navy Summit", "Heather Fog"],
    related: ["8", "4", "5"],
  },
  {
    id: "8", name: "Trekker Cargo Shorts", category: "bottoms", categoryLabel: "Bottoms",
    price: 39.99, emoji: "👖", image: "/products/cargo-shorts.jpg",
    description: "Built for the trail with six functional pockets and a relaxed fit. Lightweight ripstop cotton tough enough for rocky terrain but comfortable enough for the lodge. Your essential mountain gear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki Trail", "Olive Summit", "Washed Slate"],
    related: ["7", "9", "12"],
  },
  {
    id: "9", name: "Summit Cap", category: "accessories", categoryLabel: "Accessories",
    price: 24.99, emoji: "🧢", image: "/products/pb-cap.jpg", badge: "HOT",
    description: "Reach the summit in style. Structured front with embroidered PB logo, curved brim, and adjustable snapback. Made from recycled cotton twill — lightweight enough for the highest peaks.",
    sizes: ["One Size"],
    colors: ["Peak Black", "Snow White", "Crimson"],
    related: ["10", "11", "3"],
  },
  {
    id: "10", name: "Himalayan Beanie", category: "accessories", categoryLabel: "Accessories",
    price: 19.99, emoji: "🧣", image: "/products/rainbow-beanie.jpg",
    description: "Stay warm at any altitude. Chunky knit from recycled yarn with a fold-up brim and slouchy fit. The rich, warm tones are inspired by mountain sunsets and highland wildflowers.",
    sizes: ["One Size"],
    colors: ["Warm Sunset", "Cool Ridge", "Mountain Berry"],
    related: ["9", "11", "12"],
  },
  {
    id: "11", name: "Expedition Tote", category: "accessories", categoryLabel: "Accessories",
    price: 29.99, emoji: "🎒", image: "/products/adventure-tote.jpg",
    description: "A sturdy canvas tote built for every expedition — from market runs to mountain trails. Reinforced handles, interior pocket, and wide base. Made from 100% recycled canvas for a lighter footprint.",
    sizes: ["One Size"],
    colors: ["Natural Canvas", "Alpine Black", "Forest Sage"],
    related: ["9", "10", "12"],
  },
  {
    id: "12", name: "Trail Pattern Socks (3-Pack)", category: "accessories", categoryLabel: "Accessories",
    price: 14.99, emoji: "🧦", image: "/products/pattern-socks.jpg",
    description: "Life's too short for boring socks — especially on the trail. Three pairs with unique mountain-inspired patterns. Cushioned sole, reinforced heel, and moisture-wicking blend for all-day comfort at any elevation.",
    sizes: ["S (5-8)", "M (8-11)", "L (11-14)"],
    colors: ["Peak Mix", "Trail Mix", "Summit Mix"],
    related: ["9", "10", "11"],
  },
  {
    id: "13", name: "Dhaulagiri Parka", category: "hoodies", categoryLabel: "Hoodies",
    price: 89.99, emoji: "🧥", image: "/products/dhaulagiri-parka.jpg", badge: "NEW",
    description: "Named after the world's seventh-highest peak. This insulated parka features a water-resistant outer shell, warm quilted lining, and a detachable faux-fur hood. Built to withstand the fiercest mountain winds.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Midnight Navy", "Crimson Storm", "Stone Grey"],
    related: ["4", "5", "6"],
  },
  {
    id: "14", name: "Rhododendron Fleece Vest", category: "hoodies", categoryLabel: "Hoodies",
    price: 49.99, emoji: "🧥", image: "/products/rhodo-vest.jpg",
    description: "Inspired by the vibrant rhododendron forests of the highlands. This lightweight fleece vest is perfect for layering — warm enough for chilly mornings, breathable for afternoon treks. Zip pockets keep essentials secure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Bloom Red", "Forest Green", "Petal Pink"],
    related: ["4", "5", "13"],
  },
  {
    id: "15", name: "Khumbu Thermal Henley", category: "tshirts", categoryLabel: "T-Shirts",
    price: 44.99, emoji: "👕", image: "/products/khumbu-henley.jpg", badge: "NEW",
    description: "A waffle-knit thermal henley inspired by the legendary Khumbu valley. Three-button placket, thumbhole cuffs, and a relaxed fit. The perfect mid-layer for mountain mornings or crisp autumn evenings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Glacier Cream", "Deep Earth", "Mountain Blue"],
    related: ["1", "2", "3"],
  },
  {
    id: "16", name: "Ridge Runner Windbreaker", category: "hoodies", categoryLabel: "Hoodies",
    price: 74.99, emoji: "🧥", image: "/products/ridge-windbreaker.jpg",
    description: "Light as air, tough as the mountain itself. This packable windbreaker features sealed seams, a hidden hood, and reflective details for low-light trekking. Rolls into its own pocket for easy carrying.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sunset Orange", "Peak Blue", "Shadow Black"],
    related: ["4", "13", "14"],
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Bottoms", "Accessories"] as const;

export const categoryMap: Record<string, string | null> = {
  All: null,
  "T-Shirts": "tshirts",
  Hoodies: "hoodies",
  Bottoms: "bottoms",
  Accessories: "accessories",
};
