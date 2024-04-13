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
      <button className="text-gray-600 px-3 py-1 border-r" onClick={reduce}>-</button>
      <input type="text" className="text-center w-10" value="1" />
      <button className="text-gray-600 px-3 py-1 border-l" onClick={increase}>+</button>
    </>
  );
};


