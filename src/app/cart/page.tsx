"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl font-black tracking-tight mb-4">Your cart is empty</h1>
          <p className="text-gray text-lg mb-8">Looks like you haven&apos;t added anything yet!</p>
          <Link
            href="/shop"
            className="bg-coral text-white px-9 py-4 rounded-full font-bold shadow-[0_6px_20px_rgba(255,107,107,0.35)] hover:bg-coral-dark hover:-translate-y-0.5 transition-all inline-block"
          >
            Start Shopping →
          </Link>
        </div>
      </section>
    );
  }

  const shipping = subtotal >= 75 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <>
      {/* Hero */}
      <section className="py-16 pb-10 text-center bg-gradient-to-br from-[#FFF1F1] via-[#FFF9E6] to-[#E6F0FF]">
        <h1 className="text-5xl font-black tracking-tight">Your Cart 🛒</h1>
        <p className="text-gray mt-2 text-lg">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-md"
                >
                  {/* Product emoji */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl shrink-0">
                    {product.emoji}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate">{product.name}</h3>
                    <p className="text-gray text-sm">{product.categoryLabel}</p>
                    <p className="text-coral font-extrabold text-lg mt-1">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold hover:border-coral hover:text-coral transition-colors"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold hover:border-coral hover:text-coral transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray hover:text-red-500 transition-colors text-xl"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-gray hover:text-red-500 transition-colors text-sm font-medium mt-2"
              >
                Clear cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-xl shadow-md h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray">Subtotal ({itemCount} items)</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Shipping</span>
                  <span className="font-bold">
                    {shipping === 0 ? (
                      <span className="text-teal">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray">
                    Free shipping on orders over $75 — you&apos;re ${(75 - subtotal).toFixed(2)} away!
                  </p>
                )}
                <hr className="my-3" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-extrabold text-coral">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-coral text-white py-4 rounded-full font-bold text-lg shadow-[0_6px_20px_rgba(255,107,107,0.35)] hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,107,107,0.45)] transition-all">
                Checkout →
              </button>

              <Link
                href="/shop"
                className="block text-center mt-4 text-gray hover:text-coral transition-colors text-sm font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
