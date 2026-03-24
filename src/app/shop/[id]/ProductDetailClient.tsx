"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const basePath = process.env.NODE_ENV === "production" ? "/pb-bhusal-wears" : "";

export default function ProductDetailClient({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="py-24 text-center">
        <div className="text-8xl mb-6">😢</div>
        <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
        <p className="text-gray mb-8">This product doesn&apos;t exist or has been removed.</p>
        <Link href="/shop" className="bg-crimson text-white px-9 py-4 rounded-full font-bold hover:bg-crimson-dark transition-all inline-block">
          Back to Shop →
        </Link>
      </section>
    );
  }

  const relatedProducts = product.related
    .map((rid) => products.find((p) => p.id === rid))
    .filter(Boolean);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray">
          <Link href="/" className="hover:text-crimson transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/shop" className="hover:text-crimson transition-colors">Shop</Link>
          <span className="mx-2">›</span>
          <span className="hover:text-crimson transition-colors">{product.categoryLabel}</span>
          <span className="mx-2">›</span>
          <span className="text-dark font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              {product.badge && (
                <span className="absolute top-4 left-4 bg-saffron text-dark px-4 py-1.5 rounded-full text-sm font-bold z-10">
                  {product.badge}
                </span>
              )}
              <div className="bg-gradient-to-br from-snow to-sky/10 rounded-2xl h-[500px] relative overflow-hidden">
                <img
                  src={`${basePath}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-sm text-gray font-medium uppercase tracking-wider mb-2">{product.categoryLabel}</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">{product.name}</h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-crimson">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray line-through">${product.oldPrice.toFixed(2)}</span>
                )}
                {product.oldPrice && (
                  <span className="bg-teal/10 text-teal text-sm font-bold px-3 py-1 rounded-full">
                    Save ${(product.oldPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray leading-relaxed mb-8">{product.description}</p>

              {/* Size Selector */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3">
                  Size {selectedSize && <span className="text-crimson normal-case">— {selectedSize}</span>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedSize === size
                          ? "border-crimson bg-crimson text-white"
                          : "border-gray-200 hover:border-crimson"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-8">
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3">
                  Color {selectedColor && <span className="text-crimson normal-case">— {selectedColor}</span>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2.5 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedColor === color
                          ? "border-crimson bg-crimson text-white"
                          : "border-gray-200 hover:border-crimson"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center font-bold text-lg hover:text-crimson transition-colors"
                  >
                    −
                  </button>
                  <span className="w-11 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center font-bold text-lg hover:text-crimson transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 rounded-full font-bold text-lg transition-all ${
                    added
                      ? "bg-teal text-white scale-[0.98]"
                      : "bg-crimson text-white shadow-[0_6px_20px_rgba(220,20,60,0.35)] hover:bg-crimson-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(220,20,60,0.45)]"
                  }`}
                >
                  {added ? "✓ Added to Cart!" : "Add to Cart"}
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-100">
                {[
                  { emoji: "🚚", text: "Free shipping over $75" },
                  { emoji: "🔄", text: "30-day free returns" },
                  { emoji: "🌿", text: "Eco-friendly materials" },
                  { emoji: "💯", text: "Premium quality" },
                ].map(({ emoji, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray">
                    <span>{emoji}</span> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight">You Might Also Like<span className="text-crimson">.</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedProducts.map((p) => p && <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
