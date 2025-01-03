import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Tulip Bouquet",
    price: "$20",
    img: "/images/tulip.jpeg",
  },
  {
    id: 2,
    name: "Rose Bouquet",
    price: "$30",
    img: "/images/rose.jpeg",
  },
  {
    id: 3,
    name: "Orchid Bouquet",
    price: "$40",
    img: "/images/orchid.jpeg",
  },
  {
    id: 4,
    name: "Lily Bouquet",
    price: "$25",
    img: "/images/lily.jpeg",
  },
  {
    id: 5,
    name: "SunFlower Bouquet",
    price: "$35",
    img: "/images/sunflwr.jpeg",
  },
  {
    id: 6,
    name: "Jasmine Bouquet",
    price: "$45",
    img: "/images/jasmine.jpeg",
  },
  {
    id: 7,
    name: "Lotus Bouquet",
    price: "$50",
    img: "/images/lotus.jpeg",
  },
  {
    id: 8,
    name: "Carnation Bouquet",
    price: "$60",
    img: "/images/carnation.jpeg",
  },
  {
    id: 9,
    name: "Daisy Bouquet",
    price: "$70",
    img: "/images/daisy.jpeg",
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: products }, { status: 200 });
}