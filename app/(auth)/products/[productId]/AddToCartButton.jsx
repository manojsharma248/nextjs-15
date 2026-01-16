"use client";

import { useRouter } from "next/navigation";

export default function AddToCartButton({ label }) {
  const router = useRouter();

  const handleAddToCart = () => {
    // Add to cart logic here (e.g., add to state, localStorage, etc.)

    // Redirect to cart page
    router.push("/cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
}
