import { CartContextTypes, Context } from "@/context/CartContext";
import { removeCart, usdToRupiah } from "@/services/ProductService";
import Image from "next/image";
import {
  Dispatch,
  ServerContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type PropsToggle = {
  setToggle: Dispatch<SetStateAction<boolean>>;
};

const ModalComp = ({ setToggle }: PropsToggle) => {
  const [data, setData] = useState<null | any[]>(null);
  const contextValue = useContext(Context);
  const { cart }: CartContextTypes = contextValue || { cart: [] };

  useEffect(() => {
    setData(cart);
  }, [cart]);

  return (
    <div className="fixed w-full min-h-screen mx-4 flex justify-center items-center top-0 z-50">
      <div className="w-full max-w-[892px] h-[625px] overflow-y-scroll shadow-primary bg-white">
        <div className="h-24 border-b-2 border-[#E2E2E2] flex items-center justify-between w-full">
          <h1 className="text-3xl font-semibold text-[#AAAAAA] ml-7">Cart</h1>
          <button
            type="button"
            className="mr-7"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x text-[#AAAAAA]"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {data?.length ? (
          <div className="flex flex-col p-7 gap-3">
            {data.map((e, i) => (
              <div
                key={i}
                className="w-full h-[100px] relative max-w-[811px] flex flex-wrap items-center justify-between border rounded-md border-[#CFCFCF]"
              >
                <div className="flex gap-4 p-2">
                  <div className="w-16">
                    <Image
                      src={e.thumbnail}
                      width={400}
                      height={400}
                      alt={e.title}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-[#999999]">
                    <h3 className="text-base font-semibold">{e.title}</h3>
                    <span className="text-sm  lg:text-xl font-semibold">
                      {usdToRupiah(e.price)}
                    </span>
                  </div>
                </div>
                <div className="mr-5 text-[#999999] text-base font-semibold">
                  Qty: {e.qty}
                </div>
                <button
                  className="absolute -top-3 -right-2"
                  onClick={() => removeCart(e.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-square-rounded-x-filled text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                      fill="currentColor"
                      strokeWidth="0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-3xl font-semibold text-[#AAAAAA] h-5/6 flex justify-center items-center">
            No Item
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalComp;
