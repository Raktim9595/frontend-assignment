import newRequest from "@/utils/newRequest";
import { Product } from "@/utils/types";
import React from "react";
import ProductDetailsPage from "@/components/ProductDetailsPage";
import Link from "next/link";

interface ProductProps {
  data: Product;
}

const ProductDetails = (props: ProductProps) => {
  return (
    <main className="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto mt-5">
      <div className="mb-3">
        <p className="px-8 sm:px-0 text-xs sm:text-base flex items-center space-x-2">
          <Link href="/" className="text-sm text-orange-500 underline">
            Home
          </Link>
          <span>{">"}</span>
          <Link
            href="/allProducts"
            className="text-sm text-orange-500 underline"
          >
            products
          </Link>
          <span>{">"}</span>
          <span className="text-sm">{props.data.title}</span>
        </p>
      </div>
      <ProductDetailsPage product={props.data} />
    </main>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const { data }: { data: Product[] } = await newRequest.get("/products");
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { data }: { data: Product } = await newRequest.get(
    `/products/${params.id}`
  );
  return {
    props: {
      data: data,
    },
  };
};
