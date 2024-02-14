import {
  cartHandle,
  cropTextLong,
  usdToRupiah,
} from "@/services/ProductService";
import Image from "next/image";
import React from "react";

type PropsProductList = {
  data: DataProduct[];
};

const ProducstList = ({ data }: PropsProductList) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center lg:justify-normal gap-5">
        {data.map((e, i) => (
          <div
            key={i}
            className="w-[237px] overflow-hidden h-[299px] rounded-md border border-[#B9B9B9] bg-white shadow-sm"
          >
            <div>
              <Image
                src={e.thumbnail}
                width={300}
                height={300}
                alt={e.title}
                className="w-full h-[200px] object-cover object-center"
              />
              <div className="p-3 text-[#959595] relative">
                <h1 className="font-semibold text-base">
                  {cropTextLong(e.title)}
                </h1>
                <span className="font-normal text-base">{e.category}</span>
                <p className="font-semibold text-base lg:text-xl">
                  {usdToRupiah(e.price)}
                </p>
                <button
                  type="button"
                  className="absolute top-2 right-1 "
                  onClick={() => cartHandle(e.id)}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66666 14.5L9.66666 9.66667C9.66666 6.99729 11.8306 4.83334 14.5 4.83334V4.83334C17.1694 4.83334 19.3333 6.99729 19.3333 9.66667L19.3333 14.5"
                      stroke="#A1A1A1"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.52768 14.5428C4.67276 12.8019 4.74529 11.9315 5.31938 11.4032C5.89347 10.875 6.76693 10.875 8.51386 10.875H20.4861C22.2331 10.875 23.1065 10.875 23.6806 11.4032C24.2547 11.9315 24.3272 12.8019 24.4723 14.5428L25.1945 23.2089C25.279 24.2224 25.3212 24.7292 25.0241 25.0521C24.727 25.375 24.2185 25.375 23.2014 25.375H5.7986C4.78155 25.375 4.27302 25.375 3.97592 25.0521C3.67882 24.7292 3.72105 24.2224 3.80551 23.2089L4.52768 14.5428Z"
                      stroke="#A1A1A1"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducstList;
