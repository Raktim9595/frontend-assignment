import React from "react";
import newRequest from "@/utils/newRequest";
import { Product } from "@/utils/types";
import { GetServerSideProps } from "next";
import HomeProductCard from "@/components/HomeProductCard";
import Banner from "@/components/Banner";

interface ProductProps {
  data: Product[];
}

const HomePage = (props: ProductProps) => {
  return (
    <div>
      {/* banner section  */}
      <Banner />

      {/* products section  */}
      <main className="mt-3 max-w-[15rem] min-[450px]:max-w-sm sm:max-w-[540px] md:max-w-3xl lg:max-w-5xl mx-auto xl:max-w-6xl grid gird-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4">
        {props?.data.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  const { data }: { data: Product[] } = await newRequest.get("/products?limit=10");
  return {
    props: { data },
  };
};
