import Link from "next/link";

export default function Products() {
  return (
    <div>
      Products Page <Link href={`/products/1`}>Product 1</Link>
    </div>
  );
}
