import { Product } from "@/data/products";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative">
      {product.badge && (
        <span className="absolute top-3.5 left-3.5 bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold z-10">
          {product.badge}
        </span>
      )}
      <div className="h-72 bg-gray-100 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
        {product.emoji}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray text-sm mb-2">{product.categoryLabel}</p>
        <p>
          <span className="text-xl font-extrabold text-coral">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray line-through text-sm ml-2">${product.oldPrice.toFixed(2)}</span>
          )}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
