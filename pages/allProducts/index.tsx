"use client";

import React, { useEffect } from "react";
import { Product } from "@/utils/types";
import newRequest from "@/utils/newRequest";
import Spinner from "@/components/Spinner";
import ErrorComponent from "@/components/ErrorComponent";
import HomeProductCard from "@/components/HomeProductCard";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const AllProducts = () => {
  const router = useRouter();
  const { category, searchName } = router.query;

  var querystring: string = "/products";

  if (category) {
    querystring = querystring + `/category/${category}`;
  }

  const { data, isLoading, error, refetch } = useQuery<Product[]>({
    queryKey: ["allProducts"],
    queryFn: () => newRequest.get(querystring).then((res) => res.data),
  });
  useEffect(() => {
    refetch();
  }, [searchName]);

  if (isLoading) {
    return (
      <div className="w-[97vw] h-[80vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  let filteredProducts: Product[] | undefined;
  function escapeRegex(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  if (searchName !== undefined && !category) {
    const regex = new RegExp(escapeRegex(searchName.toString()), "gi");
    filteredProducts = data?.filter((prod) => regex.test(prod.title));
  }

  if (error) {
    return (
      <div className="h-[85vh] translate-y-1/3">
        <ErrorComponent message="something went wrong" />
      </div>
    );
  }

  return (
    <div className="max-w-[15rem] min-[450px]:max-w-sm sm:max-w-[540px] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      {category && (
        <h3 className="flex items-end my-3 space-x-4">
          <span className="text-2xl font-medium">Category: </span>
          <span>{category}</span>
        </h3>
      )}

      <h3 className="mt-8">Total Products: {filteredProducts?.length || data?.length}</h3>

      {/* main products section  */}
      <main className="mt-3 grid gird-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4">
        {filteredProducts?.length !== 0 && category === undefined
          ? filteredProducts?.map((prod) => (
              <HomeProductCard key={prod.id} product={prod} />
            ))
          : data?.map((product) => (
              <HomeProductCard key={product.id} product={product} />
            ))}
      </main>
    </div>
  );
};

export default AllProducts;
