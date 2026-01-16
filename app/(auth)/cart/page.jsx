import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ searchParams }) {
  const { lang = "en" } = await searchParams;
  setRequestLocale(lang);
  const t = await getTranslations("cart");

  return {
    title: t("title"),
    description: t("title"),
  };
}

export default async function CartPage({ searchParams }) {
  const { lang = "en" } = await searchParams;
  setRequestLocale(lang);
  const t = await getTranslations("cart");

  // Sample cart items (in a real app, this would come from state management or API)
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/placeholder-product.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "/placeholder-product.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      quantity: 3,
      image: "/placeholder-product.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 5.99;
  const grandTotal = subtotal + tax + shipping;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl mb-4">{t("empty")}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            {t("continueShopping")}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-600 mb-4">
                {t("itemsInCart", { count: cartItems.length })}
              </p>

              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {t("price")}: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t("quantity")}: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button className="text-red-600 text-sm hover:underline mt-2">
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">{t("total")}</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t("subtotal")}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t("tax")}</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t("shipping")}</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>{t("grandTotal")}</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                {t("checkout")}
              </button>

              <button className="w-full mt-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
                {t("continueShopping")}
              </button>

              {/* Language indicator */}
              <div className="mt-6 pt-4 border-t text-sm text-gray-500 text-center">
                {t("currentLanguage")}:{" "}
                <span className="font-semibold">{lang}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
