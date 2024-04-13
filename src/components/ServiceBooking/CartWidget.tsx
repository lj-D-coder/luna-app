import { FunctionComponent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface Props {
  productsCount: number;
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigateToCart = () => {
    const url = `${pathname}?${searchParams}`;
    window.location.href = url;
  };

  return (
    <button
      className="flex border-none bg-transparent cursor-pointer items-center flex-row-reverse justify-between"
      onClick={navigateToCart}
    >
      <span className="z-10 text-2xl px-2 text-gray-800">{productsCount}</span>
      <ShoppingCartIcon className="h-[32px] w-[32px] text-gray-900" />
    </button>
  );
};

export default CartWidget;
