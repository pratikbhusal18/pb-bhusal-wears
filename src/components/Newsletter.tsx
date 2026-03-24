"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-coral to-[#FF8E53] text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-2">Join the PB Fam 🎉</h2>
        <p className="opacity-90 mb-6">Get early access to drops, exclusive discounts, and good vibes in your inbox.</p>
        {submitted ? (
          <p className="text-xl font-bold animate-bounce">Thanks for subscribing! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-full text-dark outline-none"
            />
            <button type="submit" className="bg-dark text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1a1a2e] transition-colors">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
