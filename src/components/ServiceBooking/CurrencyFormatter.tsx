import { FunctionComponent } from "react";

interface Props {
  amount: number;
}

export const CurrencyFormatter: FunctionComponent<Props> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return <span className="font-bold">{formattedAmount}</span>;
};
