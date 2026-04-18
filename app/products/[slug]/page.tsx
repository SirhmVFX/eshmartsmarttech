import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts } from "@/lib/products";
import ProductDetail from "./ProductDetail";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product.relatedSlugs);
  return <ProductDetail product={product} related={related} />;
}
