import { FunctionComponent, useState } from "react";
export type Operation = "decrease" | "increase";

interface Props {
  removeProductCallback: (productId: number) => void;
  handleUpdateQuantity: (productId: number, operation: Operation) => void;
  productId: number;
}

export const Quantifier: FunctionComponent<Props> = ({ removeProductCallback, handleUpdateQuantity, productId }) => {
  const [value, setValue] = useState<number>(1);

  const reduce = (): void => {
    handleUpdateQuantity(productId, "decrease");

    setValue((prevState) => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  };

  const increase = (): void => {
    handleUpdateQuantity(productId, "increase");
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <style>
        {`
          /* Chrome, Safari, Edge, Opera */
          .no-spinner::-webkit-inner-spin-button,
          .no-spinner::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          .no-spinner {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <div className="flex items-center">
        <input
          type="button"
          value="-"
          className="bg-gray-200 font-bold text-xl h-7 w-7 p-0 relative hover:bg-gray-300 cursor-pointer"
          onClick={reduce}
        />
        <input
          type="number"
          step="1"
          max=""
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="no-spinner border box-border m-0 outline-none items-center p-2 w-10 h-7 text-center text-sm"
        />
        <input
          type="button"
          value="+"
          className="bg-gray-200 font-bold text-xl h-7 w-7 p-0 relative hover:bg-gray-300 cursor-pointer"
          onClick={increase}
        />
      </div>
    </>
  );
};


