"use client";
import { useAppContext } from "../context/Context";
import React from "react";

const Discount = () => {
  const { state } = useAppContext();
  return (
    <div
      className={`text-center py-2 text-[13px] md:text-base font-semibold
    ${
      state.theme === "dark"
        ? "bg-gray-900 text-white "
        : "bg-white text-black "
    }
  `}
    >
      20% OFF ENTIRE ORDER + FREE SHIPPING: Use Code WIN20 at checkout
    </div>
  );
};

export default Discount;
