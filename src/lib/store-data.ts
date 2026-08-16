import gloves from "@/assets/cat-gloves.jpg";
import wraps from "@/assets/cat-wraps.jpg";
import headguard from "@/assets/cat-headguard.jpg";
import shinguards from "@/assets/cat-shinguards.jpg";
import bags from "@/assets/cat-bags.jpg";
import pads from "@/assets/cat-pads.jpg";
import footwear from "@/assets/cat-footwear.jpg";
import clothing from "@/assets/cat-clothing.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import gym from "@/assets/cat-gym.jpg";
import glovesRed from "@/assets/var-gloves-red.jpg";
import glovesBlue from "@/assets/var-gloves-blue.jpg";
import glovesWhite from "@/assets/var-gloves-white.jpg";

export type Category = {
  name: string;
  href: string;
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    name: "Boxing Gloves",
    href: "/collections/boxing-gloves",
    image: gloves,
    alt: "Black and yellow leather boxing gloves",
  },
  {
    name: "Hand Wraps",
    href: "/collections/hand-wraps",
    image: wraps,
    alt: "Rolled black cotton boxing hand wraps",
  },
  {
    name: "Head Guards",
    href: "/collections/head-guards",
    image: headguard,
    alt: "Black leather boxing head guard",
  },
  {
    name: "Shin Guards",
    href: "/collections/shin-guards",
    image: shinguards,
    alt: "Pair of black Muay Thai shin guards",
  },
  {
    name: "Punch Bags",
    href: "/collections/punch-bags",
    image: bags,
    alt: "Hanging black leather heavy punch bag",
  },
  {
    name: "Pads & Mitts",
    href: "/collections/pads-mitts",
    image: pads,
    alt: "Black and yellow Thai kick pads",
  },
  {
    name: "Footwear",
    href: "/collections/footwear",
    image: footwear,
    alt: "Black high-top boxing boots",
  },
  {
    name: "Clothing",
    href: "/collections/clothing",
    image: clothing,
    alt: "Black fight shorts for combat sports training",
  },
  {
    name: "Accessories",
    href: "/collections/accessories",
    image: accessories,
    alt: "Boxing mouthguard, skipping rope and gym bag",
  },
  {
    name: "Gym Equipment",
    href: "/collections/gym-equipment",
    image: gym,
    alt: "Black kettlebell and medicine ball gym equipment",
  },
];

/** A selectable colour variant. `swatch` is ONLY used for the swatch dot and a
 *  very faint ambient glow behind the image — never as a UI accent. */
export type ProductVariant = {
  name: string;
  /** Raw product colour, used for the swatch dot + subtle studio ambience. */
  swatch: string;
  image: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  alt: string;
  badge?: string;
  variants?: ProductVariant[];
};


export const bestsellers: Product[] = [
  {
    id: "fx-bgv1",
    name: "BGV1 Universal Training Gloves",
    brand: "Fairtex",
    price: 109,
    compareAt: 129,
    rating: 4.9,
    reviews: 412,
    inStock: true,
    image: gloves,
    alt: "Fairtex BGV1 training boxing gloves",
    badge: "Bestseller",
    variants: [
      { name: "Black / Yellow", swatch: "#1b1b1b", image: gloves, alt: "Fairtex BGV1 training boxing gloves in black and yellow" },
      { name: "Red", swatch: "#c1272d", image: glovesRed, alt: "Fairtex BGV1 training boxing gloves in red" },
      { name: "Blue", swatch: "#1f4fd8", image: glovesBlue, alt: "Fairtex BGV1 training boxing gloves in blue" },
      { name: "White", swatch: "#f2f2f0", image: glovesWhite, alt: "Fairtex BGV1 training boxing gloves in white" },
    ],
  },
  {
    id: "tw-bgvl3",
    name: "BGVL3 Velcro Boxing Gloves",
    brand: "Twins Special",
    price: 99,
    rating: 4.8,
    reviews: 356,
    inStock: true,
    image: glovesRed,
    alt: "Twins Special BGVL3 velcro boxing gloves in red",
    variants: [
      { name: "Red", swatch: "#c1272d", image: glovesRed, alt: "Twins Special BGVL3 velcro boxing gloves in red" },
      { name: "Blue", swatch: "#1f4fd8", image: glovesBlue, alt: "Twins Special BGVL3 velcro boxing gloves in blue" },
      { name: "Black", swatch: "#1b1b1b", image: gloves, alt: "Twins Special BGVL3 velcro boxing gloves in black" },
    ],
  },
  {
    id: "rv-rb2",
    name: "RB2 Elite Hand Wraps 4.5m",
    brand: "Rival",
    price: 19,
    compareAt: 24,
    rating: 4.7,
    reviews: 188,
    inStock: true,
    image: wraps,
    alt: "Rival elite boxing hand wraps",
  },
  {
    id: "st-orion",
    name: "Orion Sparring Head Guard",
    brand: "Sting",
    price: 139,
    rating: 4.6,
    reviews: 94,
    inStock: true,
    image: headguard,
    alt: "Sting Orion sparring head guard",
  },
  {
    id: "pf-shin",
    name: "Primo Emblem Shin Guards",
    brand: "Primo Fightwear",
    price: 129,
    rating: 4.8,
    reviews: 143,
    inStock: false,
    image: shinguards,
    alt: "Primo Fightwear emblem Muay Thai shin guards",
  },
  {
    id: "hb-t3",
    name: "T3 Lace-Up Boxing Boots",
    brand: "Hayabusa",
    price: 179,
    compareAt: 199,
    rating: 4.7,
    reviews: 76,
    inStock: true,
    image: footwear,
    alt: "Hayabusa T3 lace-up boxing boots",
  },
];

export const newArrivals: Product[] = [
  {
    id: "na-bag",
    name: "Pro 120cm Heavy Bag (Filled)",
    brand: "Ironclad",
    price: 219,
    rating: 4.8,
    reviews: 31,
    inStock: true,
    image: bags,
    alt: "Ironclad pro 120cm filled heavy punch bag",
    badge: "New",
  },
  {
    id: "na-shorts",
    name: "Ranked Muay Thai Shorts",
    brand: "Primo Fightwear",
    price: 59,
    rating: 4.9,
    reviews: 22,
    inStock: true,
    image: clothing,
    alt: "Primo Fightwear ranked Muay Thai shorts",
    badge: "New",
  },
  {
    id: "na-kettle",
    name: "Competition Kettlebell 16kg",
    brand: "Ironclad",
    price: 74,
    rating: 4.6,
    reviews: 18,
    inStock: true,
    image: gym,
    alt: "Competition 16kg kettlebell",
    badge: "New",
  },
  {
    id: "na-kit",
    name: "Starter Kit — Gloves, Wraps, Mouthguard",
    brand: "Ironclad",
    price: 129,
    rating: 4.8,
    reviews: 64,
    inStock: true,
    image: accessories,
    alt: "Beginner combat sports starter kit with mouthguard and rope",
    badge: "New",
  },
];

export const saleProducts: Product[] = [
  {
    id: "sl-gloves",
    name: "Legacy Sparring Gloves 16oz",
    brand: "Twins Special",
    price: 79,
    compareAt: 119,
    rating: 4.7,
    reviews: 209,
    inStock: true,
    image: glovesWhite,
    alt: "Twins Special legacy 16oz sparring gloves in white",
    badge: "-34%",
    variants: [
      { name: "White", swatch: "#f2f2f0", image: glovesWhite, alt: "Twins Special legacy 16oz sparring gloves in white" },
      { name: "Black", swatch: "#1b1b1b", image: gloves, alt: "Twins Special legacy 16oz sparring gloves in black" },
      { name: "Red", swatch: "#c1272d", image: glovesRed, alt: "Twins Special legacy 16oz sparring gloves in red" },
    ],
  },
  {
    id: "sl-pads",
    name: "Curved Thai Kick Pads (Pair)",
    brand: "Fairtex",
    price: 149,
    compareAt: 189,
    rating: 4.9,
    reviews: 88,
    inStock: true,
    image: pads,
    alt: "Fairtex curved Thai kick pads",
    badge: "-21%",
  },
  {
    id: "sl-boots",
    name: "Speed Mid Boxing Boots",
    brand: "Nike",
    price: 119,
    compareAt: 159,
    rating: 4.5,
    reviews: 57,
    inStock: true,
    image: footwear,
    alt: "Nike speed mid boxing boots",
    badge: "-25%",
  },
  {
    id: "sl-guard",
    name: "Amateur Head Guard",
    brand: "Hit N Move",
    price: 89,
    compareAt: 115,
    rating: 4.4,
    reviews: 41,
    inStock: true,
    image: headguard,
    alt: "Hit N Move amateur competition head guard",
    badge: "-23%",
  },
];

export const brands = [
  "Fairtex",
  "Twins Special",
  "Primo Fightwear",
  "Rival",
  "Sting",
  "Hayabusa",
  "Nike",
  "Hit N Move",
];

export const navigation: { name: string; href: string; children?: string[] }[] = [
  {
    name: "Gloves",
    href: "/collections/boxing-gloves",
    children: ["Training Gloves", "Sparring Gloves", "Bag Gloves", "Competition Gloves", "MMA Gloves"],
  },
  {
    name: "Protection",
    href: "/collections/protection",
    children: ["Head Guards", "Shin Guards", "Mouthguards", "Groin Guards", "Elbow & Ankle"],
  },
  { name: "Wraps", href: "/collections/hand-wraps" },
  {
    name: "Punch Bags",
    href: "/collections/punch-bags",
    children: ["Heavy Bags", "Free-Standing Bags", "Speed Balls", "Brackets & Chains"],
  },
  { name: "Pads & Mitts", href: "/collections/pads-mitts" },
  { name: "Footwear", href: "/collections/footwear" },
  {
    name: "Clothing",
    href: "/collections/clothing",
    children: ["Fight Shorts", "Rash Guards", "T-Shirts", "Hoodies"],
  },
  { name: "Accessories", href: "/collections/accessories" },
  { name: "Gym Equipment", href: "/collections/gym-equipment" },
  { name: "Brands", href: "/collections/brands" },
  { name: "Sale", href: "/collections/sale" },
];
