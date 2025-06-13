"use client";
import { useAppContext } from "../context/Context";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";

type Product = {
  id: number;
  image: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { state, dispatch } = useAppContext();
  const isWishlisted = state.wishlist.includes(product.id);
  const isInCart = state.cart.includes(product.id);

  return (
    <div className="relative group bg-white rounded-lg shadow hover:shadow-lg transition p-2">
      <Image
        src={product.image}
        alt="product"
        width={300}
        height={300}
        className="rounded-lg object-cover w-full h-48"
      />
      {/* Heart icon appears on hover */}
      <button
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition bg-white rounded-full p-2 shadow"
        onClick={() =>
          dispatch({ type: "TOGGLE_WISHLIST", payload: product.id })
        }
      >
        {isWishlisted ? (
          <FaHeart className="text-red-600 text-xl" />
        ) : (
          <FaRegHeart className="text-gray-500 text-xl" />
        )}
      </button>
      {/* Cart icon always visible */}
      <button
        className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow"
        onClick={() => dispatch({ type: "TOGGLE_CART", payload: product.id })}
      >
        <HiShoppingCart
          className={
            isInCart ? "text-blue-600 text-xl" : "text-gray-500 text-xl"
          }
        />
      </button>
      <div className="mt-3 text-center font-semibold text-lg">
        ${product.price}
      </div>
    </div>
  );
};

export default ProductCard;
