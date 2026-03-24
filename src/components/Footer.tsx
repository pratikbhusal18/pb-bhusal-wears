import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-2xl font-extrabold tracking-tight mb-3">
              PB<span className="text-coral">.</span> Bhusal Wears
            </div>
            <p className="text-gray-light text-sm">
              Casual, comfy, and colorful. Wear your vibe, every day.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {["All Products", "T-Shirts", "Hoodies", "Accessories"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-gray-light hover:text-coral transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-light hover:text-coral transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-light hover:text-coral transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-light hover:text-coral transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-gray-light hover:text-coral transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h4>
            <ul className="space-y-2.5">
              {["Instagram", "TikTok", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-light hover:text-coral transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-gray-light text-sm">
          &copy; {new Date().getFullYear()} PB - Bhusal Wears. All rights reserved. Made with ❤️
        </div>
      </div>
    </footer>
  );
}
