export interface Product {
  id: string;
  name: string;
  category: "tshirts" | "hoodies" | "bottoms" | "accessories";
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  badge?: string;
  description: string;
  sizes: string[];
  colors: string[];
  related: string[];
}

export const products: Product[] = [
  {
    id: "1", name: "Sunset Gradient Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 34.99, emoji: "👕", badge: "NEW",
    description: "A vibrant gradient tee that captures the warmth of a perfect sunset. Made from 100% organic cotton with a relaxed fit that feels like a warm hug. The colors shift beautifully from coral to golden yellow — guaranteed to turn heads.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Sunset Orange", "Ocean Blue", "Forest Green"],
    related: ["2", "3", "9"],
  },
  {
    id: "2", name: "Chill Wave Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 29.99, emoji: "👕",
    description: "Ride the wave of comfort with this ultra-soft tee featuring our signature wave pattern. Pre-shrunk cotton blend keeps its shape wash after wash. Perfect for beach days, coffee runs, or just chilling at home.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sky Blue", "Mint Green", "Sandy Beige"],
    related: ["1", "3", "9"],
  },
  {
    id: "3", name: "PB Logo Essential Tee", category: "tshirts", categoryLabel: "T-Shirts",
    price: 27.99, emoji: "👕", badge: "BESTSELLER",
    description: "Our iconic logo tee — the one that started it all. Clean design, premium fabric, and the perfect weight for everyday wear. The subtle PB embroidery adds just the right amount of flair without trying too hard.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Classic White", "Midnight Black", "Coral Pink"],
    related: ["1", "2", "9"],
  },
  {
    id: "4", name: "Retro Color Block Hoodie", category: "hoodies", categoryLabel: "Hoodies",
    price: 64.99, oldPrice: 79.99, emoji: "🧥",
    description: "A throwback to the golden era of streetwear. Bold color blocking meets modern comfort with our premium fleece-lined interior. Features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs that actually stay in place.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Retro Multi", "Blue/Yellow", "Green/Coral"],
    related: ["5", "6", "7"],
  },
  {
    id: "5", name: "Cozy Oversized Hoodie", category: "hoodies", categoryLabel: "Hoodies",
    price: 59.99, emoji: "🧥", badge: "NEW",
    description: "The hoodie equivalent of a warm blanket. Intentionally oversized for maximum comfort, with dropped shoulders and a boxy fit. Made from heavyweight organic cotton terry that gets softer with every wash.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cloud Grey", "Dusty Rose", "Sage Green"],
    related: ["4", "6", "7"],
  },
  {
    id: "6", name: "Pastel Dream Zip-Up", category: "hoodies", categoryLabel: "Hoodies",
    price: 69.99, emoji: "🧥",
    description: "A dreamy zip-up in soft pastel tones. Full-length YKK zipper, two side pockets, and a lined hood. The gradient dye technique means every piece is slightly unique — like wearing a one-of-a-kind sunset.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pastel Lavender", "Pastel Peach", "Pastel Mint"],
    related: ["4", "5", "7"],
  },
  {
    id: "7", name: "Cloud Comfort Joggers", category: "bottoms", categoryLabel: "Bottoms",
    price: 54.99, emoji: "👖", badge: "BESTSELLER",
    description: "Named after the feeling you get wearing them — like walking on clouds. Tapered fit with an elastic waistband, deep pockets, and ankle cuffs. The brushed fleece interior is so soft you'll never want to take them off.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Heather Grey"],
    related: ["8", "4", "5"],
  },
  {
    id: "8", name: "Weekend Cargo Shorts", category: "bottoms", categoryLabel: "Bottoms",
    price: 39.99, emoji: "👖",
    description: "Built for adventure with six functional pockets and a relaxed fit. Made from lightweight ripstop cotton that's tough enough for hiking but comfortable enough for the couch. Your new go-to for every weekend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Olive", "Washed Black"],
    related: ["7", "9", "12"],
  },
  {
    id: "9", name: "PB Classic Cap", category: "accessories", categoryLabel: "Accessories",
    price: 24.99, emoji: "🧢", badge: "HOT",
    description: "The finishing touch to any outfit. Structured front with our embroidered PB logo, curved brim, and an adjustable snapback. Made from recycled cotton twill. One size fits most — looks good on everyone.",
    sizes: ["One Size"],
    colors: ["Black", "White", "Coral"],
    related: ["10", "11", "3"],
  },
  {
    id: "10", name: "Rainbow Beanie", category: "accessories", categoryLabel: "Accessories",
    price: 19.99, emoji: "🧣",
    description: "Stay warm in style with our rainbow-striped beanie. Chunky knit from recycled yarn with a fold-up brim and a slouchy fit. The colors are bright enough to brighten even the grayest winter day.",
    sizes: ["One Size"],
    colors: ["Rainbow", "Warm Tones", "Cool Tones"],
    related: ["9", "11", "12"],
  },
  {
    id: "11", name: "PB Adventure Tote", category: "accessories", categoryLabel: "Accessories",
    price: 29.99, emoji: "🎒",
    description: "A sturdy canvas tote that carries everything from groceries to gym gear. Reinforced handles, interior pocket, and a wide base that stands up on its own. Our most eco-friendly product — made from 100% recycled canvas.",
    sizes: ["One Size"],
    colors: ["Natural Canvas", "Black", "Sage"],
    related: ["9", "10", "12"],
  },
  {
    id: "12", name: "Fun Pattern Socks (3-Pack)", category: "accessories", categoryLabel: "Accessories",
    price: 14.99, emoji: "🧦",
    description: "Life's too short for boring socks. Each pack includes three pairs with unique playful patterns — stripes, dots, and our signature PB print. Cushioned sole and reinforced heel for all-day comfort.",
    sizes: ["S (5-8)", "M (8-11)", "L (11-14)"],
    colors: ["Fun Mix", "Cool Mix", "Warm Mix"],
    related: ["9", "10", "11"],
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
