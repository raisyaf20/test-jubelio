const apiUri = process.env.NEXT_PUBLIC_BASE_URL as string;
const existingCartData = () => JSON.parse(localStorage.getItem("cart") || "[]");

export function cropTextLong(text: string) {
  return text.substring(0, 15) + "...";
}

export function usdToRupiah(usdAmount: number) {
  const rupiah = 14000;
  const convert = usdAmount * rupiah;
  return convert.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}

export async function getProductsSearch(query: string) {
  const res = fetch(`${apiUri}/products/search?q=${query}`);
  return (await res).json();
}

export const cartHandle = async (id: number) => {
  await fetch(`${apiUri}/products/${id}`)
    .then((res) => res.json())
    .then((result: any) => {
      const cart = existingCartData();

      let itemExists = false;

      cart.map((e: any) => {
        if (e.id === id) {
          e.qty++;
          itemExists = true;
        }
      });

      if (!itemExists) {
        if (!result.message) {
          result.qty = 1;
          cart.push(result);
        } else {
          alert(result.message);
          return;
        }
      }
      const updatedCartData = JSON.stringify(cart);
      localStorage.setItem("cart", updatedCartData);
      location.reload();
    })
    .catch((err) => alert(err.message));
};

export const removeCart = (id: number) => {
  const cart = existingCartData() || [];
  const removeCart = cart.findIndex((item: any) => item.id === id);
  if (removeCart !== -1) {
    cart.splice(removeCart, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  } else {
    console.log("Item not found");
  }
};
