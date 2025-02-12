/* eslint-disable react/prop-types */
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "100 Nespresoo® compatible coffee Pods",
    image: "productone.png",
    hoverImage: "productoneflip.png",
    description: "Available in 12 blends",
    price: "€41.00",
  },
  {
    id: 2,
    name: "60 Nespresso® compatible coffee Pods",
    image: "producttwo.png",
    hoverImage: "producttwoflip.png",
    description: "Available in 15 blends.",
    price: "€25.50",
  },
  {
    id: 3,
    name: "Refills of Whole Bean & Ground Coffee",
    image: "productthree.png",
    hoverImage: "productthreeflip.png",
    description: "Available in 5 blends.",
    price: "€15.00",
  },
  {
    id: 4,
    name: "Iced Coffee Cans - 16 packs",
    image: "productfour.png",
    hoverImage: "productfourflip.png",
    description: "Available in 5 Flavours",
    price: "€28.00",
  },
];

export default function ProductShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? product.hoverImage : product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-medium poppins">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2 poppins">{product.description}</p>
      <p className="text-xl font-medium poppins">{product.price}</p>
    </div>
  );
}
