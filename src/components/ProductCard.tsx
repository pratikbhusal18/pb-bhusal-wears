import Link from "next/link";
import { Product } from "@/data/products";
import AddToCartButton from "./AddToCartButton";

const basePath = process.env.NODE_ENV === "production" ? "/pb-bhusal-wears" : "";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative border border-saffron/10">
      {product.badge && (
        <span className="absolute top-3.5 left-3.5 bg-saffron text-dark px-3 py-1 rounded-full text-xs font-bold z-10">
          {product.badge}
        </span>
      )}
      <Link href={`/shop/${product.id}`}>
        <div className="h-72 relative overflow-hidden bg-gradient-to-br from-snow to-sky/10">
          <img
            src={`${basePath}${product.image}`}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/shop/${product.id}`} className="hover:text-crimson transition-colors">
          <h3 className="font-bold text-lg">{product.name}</h3>
        </Link>
        <p className="text-gray text-sm mb-2">{product.categoryLabel}</p>
        <p>
          <span className="text-xl font-extrabold text-crimson">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray line-through text-sm ml-2">${product.oldPrice.toFixed(2)}</span>
          )}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
