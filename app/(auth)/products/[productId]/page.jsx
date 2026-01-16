import { getTranslations, setRequestLocale } from "next-intl/server";
import AddToCartButton from "./AddToCartButton";

export default async function Product({ params, searchParams }) {
  const { productId } = await params;
  const { lang = "en" } = await searchParams;

  // Set the locale for this request
  setRequestLocale(lang);

  // Get translations
  const t = await getTranslations("product");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-2">
          <span className="font-semibold">{t("productLabel")}:</span>{" "}
          {productId}
        </p>
        <p className="text-gray-600 mb-4">
          {t("description")} {productId}
        </p>
        <div className="border-t pt-4 mt-4">
          <p className="mb-2">
            <span className="font-semibold">{t("price")}:</span> $99.99
          </p>
          <p className="mb-4">
            <span className="font-semibold">{t("availability")}:</span>{" "}
            <span className="text-green-600">{t("inStock")}</span>
          </p>
          <AddToCartButton label={t("addToCart")} />
        </div>

        {/* Language indicator */}
        <div className="mt-6 pt-4 border-t text-sm text-gray-500">
          {t("currentLanguage")}: <span className="font-semibold">{lang}</span>
        </div>
      </div>
    </div>
  );
}
export async function generateMetadata({ params, searchParams }) {
  const { productId } = await params;
  const { lang = "en" } = await searchParams;

  setRequestLocale(lang);
  const t = await getTranslations("metadata");

  return {
    title: t("title", { productId }),
    description: t("description", { productId }),
  };
}
