import ModalComp from "@/components/Fragments/Modal";
import NavbarComp from "@/components/Fragments/Navbar";
import ProducstList from "@/components/Fragments/ProducstList";
import ProductLayout from "@/components/layouts/ProductLayout";
import { getProductsSearch } from "@/services/ProductService";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [productsSearch, setProductsSearch] = useState<DataProduct[]>([]);

  useEffect(() => {
    const fetchSearchProducts = async () => {
      try {
        const data: ResponseGetProducts = await getProductsSearch(query);
        setProductsSearch(data.products);
      } catch (error) {
        console.error("Error Searh Products:", error);
      }
    };

    fetchSearchProducts();
  }, [query]);

  return (
    <main className={`${inter.className}`}>
      <NavbarComp setToggle={setToggle} />
      <div className="container mx-auto max-w-[1377px]">
        <div className="flex justify-between px-5">
          <h1 className="text-3xl mt-9 mb-5 font-medium">Produk</h1>
          <button className="lg:hidden" onClick={() => setSidebar(!sidebar)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
        </div>
        <div className="w-full h-[.9px] bg-[#CBCBCB]" />
        <ProductLayout setQuery={setQuery} side={sidebar}>
          <ProducstList data={productsSearch} />
        </ProductLayout>
      </div>
      {toggle && <ModalComp setToggle={setToggle} />}
    </main>
  );
}
