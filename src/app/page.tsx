import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

const features = [
  { emoji: "🚚", label: "Free Shipping" },
  { emoji: "🌿", label: "Eco-Friendly" },
  { emoji: "💯", label: "Premium Quality" },
  { emoji: "🔄", label: "Easy Returns" },
];

const testimonials = [
  { stars: 5, text: "The softest hoodie I've ever owned. I literally live in it now. Colors are amazing!", author: "Priya M." },
  { stars: 5, text: "Love the playful designs! I get compliments every time I wear my PB tee. Will be buying more!", author: "Jake T." },
  { stars: 5, text: "Finally a brand that's fun AND eco-conscious. The joggers fit perfectly. Shipping was super fast too.", author: "Anika R." },
];

const featured = products.filter((p) => p.badge);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 pb-20 text-center bg-gradient-to-br from-[#FFF1F1] via-[#FFF9E6] via-40% to-[#E6F0FF] relative overflow-hidden">
        <span className="absolute -top-8 -right-10 text-[200px] opacity-[0.07] rotate-[15deg] select-none">👕</span>
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5">
            Wear Your <span className="text-coral">Vibe</span> 🎨
          </h1>
          <p className="text-lg text-gray max-w-xl mx-auto mb-9">
            Casual, comfy, and colorful clothing for everyday adventures. Express yourself with PB - Bhusal Wears.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/shop" className="bg-coral text-white px-9 py-4 rounded-full font-bold shadow-[0_6px_20px_rgba(255,107,107,0.35)] hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,107,107,0.45)] transition-all">
              Shop Now →
            </Link>
            <Link href="/about" className="border-2 border-dark px-9 py-4 rounded-full font-bold hover:bg-dark hover:text-white hover:-translate-y-0.5 transition-all">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-dark text-white text-center">
        {features.map(({ emoji, label }) => (
          <div key={label} className="py-7 px-5">
            <div className="text-3xl mb-2">{emoji}</div>
            <h4 className="text-sm font-semibold">{label}</h4>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Trending Now<span className="text-coral">.</span></h2>
            <p className="text-gray mt-2">Our most-loved pieces this season</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Happy Vibes<span className="text-coral">.</span></h2>
            <p className="text-gray mt-2">What our customers are saying</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map(({ text, author, stars }) => (
              <div key={author} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-yellow text-xl mb-3">{"⭐".repeat(stars)}</div>
                <p className="text-gray italic mb-4">&ldquo;{text}&rdquo;</p>
                <div className="font-bold">— {author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
