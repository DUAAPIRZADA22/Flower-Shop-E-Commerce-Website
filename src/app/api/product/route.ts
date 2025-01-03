import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Tulip Bouquet",
    price: "$20",
    img: "/images/tulip.jpeg",
    description:"The tulip is a graceful spring flower with cup-shaped petals in vibrant colors like red, pink, yellow, and white. It symbolizes love, elegance, and renewal. Known for its simplicity and beauty, tulips brighten gardens and are a popular choice for bouquets. Their smooth petals and symmetrical form make them a timeless emblem of charm and sophistication. Tulips are associated with cheerfulness and are often given as a gesture of love and appreciation."
  },
  {
    id: 2,
    name: "Rose Bouquet",
    price: "$30",
    img: "/images/rose.jpeg",
    description:"The rose is a classic symbol of love and passion, admired for its velvety petals and enchanting fragrance. Found in shades like red, white, pink, and yellow, each color conveys a unique sentiment. Roses embody romance, elegance, and timeless beauty. Their intricate blooms and sweet scent make them a cherished flower for special occasions. Roses not only express deep emotions but also add grace to any setting, leaving a lasting impression."
  },
  {
    id: 3,
    name: "Orchid Bouquet",
    price: "$40",
    img: "/images/orchid.jpeg",
    description:"Orchids are exotic and captivating flowers known for their unique patterns and vibrant hues. They symbolize elegance, beauty, and strength. Orchids have intricate, symmetrical petals that make them a true wonder of nature. Their delicate blooms exude sophistication and are often associated with luxury and refinement. With their long-lasting flowers, orchids are a favorite for enhancing home décor, weddings, and special events."
  },
  {
    id: 4,
    name: "Lily Bouquet",
    price: "$25",
    img: "/images/lily.jpeg",
    description:"The lily is a timeless symbol of purity, grace, and renewal. Its trumpet-shaped petals come in colors like white, pink, and orange, each radiating beauty and elegance. Lilies are known for their sweet and calming fragrance that fills the air. This flower often represents peace and tranquility, making it a popular choice for serene occasions. Its majestic blooms bring a sense of calm and splendor to any space."
  },
  {
    id: 5,
    name: "SunFlower Bouquet",
    price: "$35",
    img: "/images/sunflwr.jpeg",
    description:"The sunflower stands tall with its large golden petals and dark center, mirroring the sun's brightness. It represents happiness, positivity, and warmth. Sunflowers are a symbol of loyalty and strength, always facing the light. Their cheerful appearance brings joy to gardens and homes. These vibrant flowers brighten up any setting, inspiring optimism and hope wherever they bloom."
  },
  {
    id: 6,
    name: "Jasmine Bouquet",
    price: "$45",
    img: "/images/jasmine.jpeg",
    description:"Jasmine is a small, delicate flower known for its sweet, intoxicating fragrance. Its star-shaped white blooms symbolize purity, love, and spiritual beauty. Often blooming at night, jasmine carries a sense of mystery and romance. It is cherished in perfumes, garlands, and traditional rituals. Jasmine flowers add a touch of elegance and serenity to any environment."
  },
  {
    id: 7,
    name: "Lotus Bouquet",
    price: "$50",
    img: "/images/lotus.jpeg",
    description:"The lotus is a sacred flower that rises from muddy waters to bloom in purity and grace. It symbolizes spiritual growth, resilience, and enlightenment. With its vibrant petals in shades of pink, white, and blue, the lotus is admired for its beauty and meaning. Revered in many cultures, it represents the triumph of inner strength over adversity. The lotus inspires tranquility and serenity, making it a symbol of peace."
  },
  {
    id: 8,
    name: "Carnation Bouquet",
    price: "$60",
    img: "/images/carnation.jpeg",
    description:"Carnations are elegant flowers with ruffled petals in colors like red, pink, white, and yellow. They symbolize love, admiration, and distinction, with each shade carrying a special message. Carnations have a soft, clove-like fragrance and a long-lasting bloom. They are widely used in bouquets and decorations for celebrations and heartfelt expressions. Their beauty and resilience make them a favorite worldwide."
  },
  {
    id: 9,
    name: "Daisy Bouquet",
    price: "$70",
    img: "/images/daisy.jpeg",
    description:"The daisy is a cheerful flower with white petals surrounding a sunny yellow center. It represents innocence, purity, and fresh beginnings. Daisies have a simple yet captivating charm that brightens any setting. Their association with positivity and optimism makes them a symbol of happiness. Daisies are often used in gardens, bouquets, and floral designs to spread joy and warmth."
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: products }, { status: 200 });
}