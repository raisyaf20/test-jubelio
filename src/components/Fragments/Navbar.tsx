import { CartContextTypes, Context } from "@/context/CartContext";
import React, { useContext } from "react";
import { PropsToggle } from "./Modal";

const NavbarComp = ({ setToggle }: PropsToggle) => {
  const contextValue = useContext(Context);
  const { cart }: CartContextTypes = contextValue || { cart: [] };
  return (
    <div className="bg-[#ECECEC] flex items-center h-20">
      <nav className="flex justify-between w-full gap-4 items-center p-5">
        <h1 className="text-2xl font-semibold">E-Commerce</h1>
        <div className="relative" onClick={() => setToggle(true)}>
          <svg
            width="37"
            height="37"
            viewBox="0 0 55 55"
            fill="none"
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16666 9.16666H14.4801C15.2301 9.16666 15.605 9.16666 15.8763 9.37845C16.1476 9.59025 16.2385 9.95403 16.4204 10.6816L17.5759 15.3035C17.9396 16.7586 18.1215 17.4861 18.6641 17.9097C19.2066 18.3333 19.9565 18.3333 21.4564 18.3333H22.9167"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M41.25 38.9583H16.5249C15.2586 38.9583 14.6255 38.9583 14.3262 38.5431C14.0269 38.1278 14.2271 37.5271 14.6275 36.3259L15.13 34.8184C15.57 33.4984 15.79 32.8384 16.3138 32.4609C16.8375 32.0833 17.5333 32.0833 18.9247 32.0833H32.0833"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.7223 32.0833H20.0276C19.0499 32.0833 18.2155 31.3765 18.0548 30.4121L16.3328 20.0799C16.1804 19.1656 16.8854 18.3333 17.8123 18.3333H44.2153C44.9587 18.3333 45.4422 19.1157 45.1097 19.7806L39.5111 30.9778C39.1723 31.6553 38.4798 32.0833 37.7223 32.0833Z"
              fill="#222222"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="38.9583" cy="45.8333" r="2.29167" fill="#222222" />
            <circle cx="20.625" cy="45.8333" r="2.29167" fill="#222222" />
          </svg>
          {cart.length > 0 && (
            <div className="rounded-full w-6 h-6 text-white text-base -top-1 -right-1 text-center bg-red-500 absolute grid content-center">
              <span>{cart.length}</span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
