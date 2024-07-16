import { nanoid } from "nanoid";
import offerimg from "./offerimg.png";

export const productData = [
  {
    id: nanoid(),
    name: "Mung Bean",
    category: "Vegetable",
    originalPrice: 20.0,
    currentPrice: 11.0,
    rating: 5,
    img: offerimg,
  },
  {
    id: nanoid(),
    name: "Brown Hazelnut",
    category: "Vegetable",
    originalPrice: 20.0,
    currentPrice: 12.0,
    rating: 5,
    img: offerimg,
  },
  {
    id: nanoid(),
    name: "Onion",
    category: "Vegetable",
    originalPrice: 20.0,
    currentPrice: 17.0,
    rating: 5,
    img: offerimg,
  },
  {
    id: nanoid(),
    name: "Cabbage",
    category: "Vegetable",
    originalPrice: 20.0,
    currentPrice: 17.0,
    rating: 5,
    img: offerimg,
  },
];
