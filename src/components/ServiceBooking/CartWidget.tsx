import { FunctionComponent } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Import the usePathname and useSearchParams hooks
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface Props {
  productsCount: number;
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const pathname = usePathname(); // Use the usePathname hook
  const searchParams = useSearchParams(); // Use the useSearchParams hook

  const navigateToCart = () => {
    const url = `${pathname}?${searchParams}`;
    window.location.href = url; // Use window.location.href to navigate
  };

  return (
    <button className=" mr-20 p-x-4 flex border-none bg-transparent cursor-pointer items-center flex-row-reverse justify-between
    " onClick={navigateToCart}>
      <span className="z-10 text-2xl p-2 text-gray-800">{productsCount}</span>
      <ShoppingCartIcon className="h-[32px] w-[32px] text-gray-900" />
    </button>
  );
};

export default CartWidget;
