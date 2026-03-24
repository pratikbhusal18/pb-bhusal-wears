import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

const features = [
  { emoji: "🏔️", label: "Himalayan Heritage" },
  { emoji: "🌿", label: "Eco-Friendly" },
  { emoji: "🧵", label: "Handcrafted Quality" },
  { emoji: "🌍", label: "Worldwide Shipping" },
];

const testimonials = [
  { stars: 5, text: "The Dhaka-inspired patterns are stunning! I feel connected to Nepal every time I wear my hoodie. Absolutely love the quality.", author: "Priya S." },
  { stars: 5, text: "Finally a brand that celebrates South Asian heritage with modern style. The joggers are incredibly comfortable!", author: "Jake T." },
  { stars: 5, text: "Ordered the tee and cap — both arrived beautifully packaged. The attention to detail and cultural touches are amazing.", author: "Anika R." },
];

const featured = products.filter((p) => p.badge);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 pb-20 text-center relative overflow-hidden bg-gradient-to-b from-himalaya via-himalaya-light to-himalaya">
        {/* Decorative mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-snow" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 85% 0, 70% 60%, 55% 10%, 40% 50%, 25% 0, 10% 70%, 0 20%)" }} />
        <span className="absolute top-10 right-10 text-[200px] opacity-[0.05] select-none">🏔️</span>
        <div className="max-w-7xl mx-auto px-6 relative text-white">
          {/* Prayer flag decoration */}
          <div className="flex justify-center mb-8 gap-1">
            {["bg-blue-400", "bg-white", "bg-red-400", "bg-green-400", "bg-yellow-400"].map((c, i) => (
              <div key={i} className={`w-12 h-8 ${c} opacity-60 rounded-sm rotate-[-3deg] shadow-sm`} style={{ transform: `rotate(${-5 + i * 2}deg)` }} />
            ))}
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5">
            From the <span className="text-saffron">Himalayas</span><br />to Your Wardrobe 🏔️
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-9">
            Clothing inspired by Nepali heritage — where ancient traditions meet modern style. Wear your roots with pride.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/shop" className="bg-crimson text-white px-9 py-4 rounded-full font-bold shadow-[0_6px_20px_rgba(220,20,60,0.35)] hover:bg-crimson-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(220,20,60,0.45)] transition-all">
              Shop Now →
            </Link>
            <Link href="/about" className="border-2 border-saffron text-saffron px-9 py-4 rounded-full font-bold hover:bg-saffron hover:text-dark hover:-translate-y-0.5 transition-all">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-crimson to-crimson-dark text-white text-center">
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
            <h2 className="text-4xl font-extrabold tracking-tight">Trending Now<span className="text-crimson">.</span></h2>
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
      <section className="py-20 bg-gradient-to-b from-snow to-sky/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Voices of the Fam<span className="text-crimson">.</span></h2>
            <p className="text-gray mt-2">What our community is saying</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map(({ text, author, stars }) => (
              <div key={author} className="bg-white p-8 rounded-xl shadow-md border border-saffron/10">
                <div className="text-saffron text-xl mb-3">{"⭐".repeat(stars)}</div>
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
