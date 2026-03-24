"use client";

import { useState, FormEvent } from "react";
import Newsletter from "@/components/Newsletter";

const faqs = [
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days within the US. International orders typically arrive in 7-14 business days. Free shipping on orders over $75!" },
  { q: "What's your return policy?", a: "We offer hassle-free returns within 30 days of purchase. Items must be unworn with tags attached. We'll provide a prepaid return label!" },
  { q: "Are your materials eco-friendly?", a: "Absolutely! We use organic cotton, recycled polyester, and sustainable dyes. Our packaging is 100% recyclable. We're committed to reducing our environmental footprint." },
  { q: "Do you offer size exchanges?", a: "Yes! If the fit isn't right, we'll exchange it for free. Just reach out to us within 30 days and we'll sort it out quickly." },
];

const contactDetails = [
  { emoji: "📧", text: "pratikbhusal18@yahoo.com" },
  { emoji: "📱", text: "+1 (555) PB-WEARS" },
  { emoji: "📍", text: "Haslet, TX — Shipping Worldwide 🌍" },
  { emoji: "⏰", text: "Mon-Fri: 9am - 6pm CT" },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 pb-10 text-center bg-gradient-to-br from-himalaya via-himalaya-light to-himalaya text-white">
        <h1 className="text-5xl font-black tracking-tight">Get in Touch 🙏</h1>
        <p className="text-white/70 mt-2 text-lg">We&apos;d love to hear from you!</p>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Chat!</h3>
              <p className="text-gray mb-6">
                Whether you have a question about our products, need help with an order, or just want to say hi — we&apos;re here for you.
              </p>
              <div className="space-y-4">
                {contactDetails.map(({ emoji, text }) => (
                  <div key={text} className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{emoji}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="flex items-center justify-center bg-[#E8FFF0] rounded-xl p-12">
                <p className="text-2xl font-bold text-teal">Message sent! We&apos;ll get back to you soon 💌</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" required className="px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-crimson transition-colors" />
                <input type="email" placeholder="Your Email" required className="px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-crimson transition-colors" />
                <input type="text" placeholder="Subject" className="px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-crimson transition-colors" />
                <textarea placeholder="Your Message..." required rows={5} className="px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-crimson transition-colors resize-vertical" />
                <button type="submit" className="bg-crimson text-white px-8 py-3.5 rounded-full font-bold shadow-[0_6px_20px_rgba(220,20,60,0.35)] hover:bg-crimson-dark hover:-translate-y-0.5 transition-all self-start">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">FAQ<span className="text-crimson">.</span></h2>
            <p className="text-gray mt-2">Quick answers to common questions</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-lg"
                >
                  {q}
                  <span className={`text-crimson text-2xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
