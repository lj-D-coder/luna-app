// pages/cart.js
import { Header } from "./header";
import { Cart } from "./cart";
import { Products } from "./products";

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <Products />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Cart />
        </div>
      </div>
    </>
  );
}
