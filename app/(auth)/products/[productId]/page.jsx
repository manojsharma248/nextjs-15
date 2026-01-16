export default async function Product({ params }) {
  const { productId } = await params;
  return <div>Products Page for product {productId}</div>;
}
export async function generateMetadata({ params }) {
  const { productId } = await params;
  return {
    title: `Product ${productId} Details`,
    description: `Details about product ${productId}`,
  };
}
