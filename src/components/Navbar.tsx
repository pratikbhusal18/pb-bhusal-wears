"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-himalaya/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-saffron">𑐥𑐧</span> Bhusal Wears
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative font-medium transition-colors hover:text-saffron after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:rounded after:bg-saffron after:transition-all ${
                  pathname === href ? "text-saffron after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <CartIcon />
          </li>
        </ul>

        {/* Mobile: cart + toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <CartIcon />
          <button
            className="text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-himalaya px-6 pb-4 space-y-3 shadow-lg">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block font-medium ${pathname === href ? "text-saffron" : "text-white/80"}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
