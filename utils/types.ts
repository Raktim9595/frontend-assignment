import { StaticImageData } from "next/image";

export enum Categories {
  ELECTRONICS = "electronics",
  JWELLERIES = "jewelery",
  MEN_CLOTHING = "men's clothing",
  WOMEN_CLOTING = "women's clothing"
};

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Categories;
  description: string;
  image: string;
  rating: Rating;
}

export interface BannerSlideProps {
  image: StaticImageData;
  bgColor: string;
  heading1: Categories;
  description: string;
}