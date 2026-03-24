"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories, categoryMap } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter((p) => {
    const cat = categoryMap[activeCategory];
    return !cat || p.category === cat;
  });

  return (
    <>
      {/* Hero */}
      <section className="py-16 pb-10 text-center bg-gradient-to-br from-himalaya via-himalaya-light to-himalaya text-white">
        <h1 className="text-5xl font-black tracking-tight">Shop All 🏔️</h1>
        <p className="text-white/70 mt-2 text-lg">Heritage-inspired clothing for the modern explorer</p>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full border-2 font-semibold text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-crimson text-white border-crimson"
                    : "bg-white border-gray-200 hover:bg-crimson hover:text-white hover:border-crimson"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray text-lg mt-12">No products found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}
