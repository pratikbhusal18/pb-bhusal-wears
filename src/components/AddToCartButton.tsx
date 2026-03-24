"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full mt-3 py-2.5 rounded-full font-bold text-sm transition-all ${
        added
          ? "bg-teal text-white scale-95"
          : "bg-crimson text-white hover:bg-crimson-dark hover:shadow-lg"
      }`}
    >
      {added ? "✓ Added!" : "Add to Cart"}
    </button>
  );
}
