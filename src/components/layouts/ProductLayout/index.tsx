import Head from "next/head";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

type PropsProductLayout = {
  children: ReactNode;
  setQuery: Dispatch<SetStateAction<string>>;
  side: boolean;
};

const ProductLayout = ({ children, setQuery, side }: PropsProductLayout) => {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
        {/* Additional meta tags */}
      </Head>
      <div className="flex">
        <aside
          className={`p-11 max-w-[270px] flex justify-center fixed transition-all ease-in-out duration-500 ${
            side ? "left-0" : ""
          } -left-72  top-0 bottom-0 bg-slate-100 z-40 lg:bg-transparent lg:static`}
        >
          <div className="d-flex flex-col md:max-w-[226px]">
            <h2 className="mb-4 text-xl font-medium">Pencarian</h2>
            <input
              type="text"
              placeholder="Cari Produk"
              onChange={(e) => setQuery(e.target.value)}
              className="mb-4 border border-[#C2C2C2] rounded-md w-full p-2 bg-white"
            />
            <button
              type="submit"
              className="p-3 text-[#6E6E6E] font-normal rounded-md bg-[#D9D9D978] w-[224px]"
            >
              Terapkan
            </button>
          </div>
        </aside>
        <main className="p-11 w-full">{children}</main>
      </div>
    </>
  );
};

export default ProductLayout;
