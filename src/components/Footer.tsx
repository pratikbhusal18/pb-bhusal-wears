import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-himalaya text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative prayer flag strip */}
        <div className="flex mb-10 h-2 rounded overflow-hidden">
          {["bg-blue-500", "bg-white", "bg-red-500", "bg-green-500", "bg-yellow-400", "bg-blue-500", "bg-white", "bg-red-500", "bg-green-500", "bg-yellow-400"].map((c, i) => (
            <div key={i} className={`flex-1 ${c}`} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-2xl font-extrabold tracking-tight mb-3">
              <span className="text-saffron">𑐥𑐧</span> Bhusal Wears
            </div>
            <p className="text-white/60 text-sm">
              From the Himalayas to your wardrobe. Clothing inspired by Nepali heritage, crafted for the modern world.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-saffron">Shop</h4>
            <ul className="space-y-2.5">
              {["All Products", "T-Shirts", "Hoodies", "Accessories"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-white/60 hover:text-saffron transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-saffron">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-white/60 hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-saffron transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-saffron transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-saffron transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-saffron">Follow Us</h4>
            <ul className="space-y-2.5">
              {["Instagram", "TikTok", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-saffron transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} PB - Bhusal Wears. All rights reserved. Made with ❤️ from Nepal 🇳🇵
        </div>
      </div>
    </footer>
  );
}
