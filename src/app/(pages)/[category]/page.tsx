import { FC } from "react";
import ServiceBooking from "@/components/ServiceBooking";
import validateCategorySlug from "@/lib/utils/slugValidate";
import { notFound } from "next/navigation";

interface categoryProps {
  params: {
    category: string;
  };
}

const page: FC<categoryProps> = async ({ params }) => {
  const categoryUrl = params.category;
  const validation = await validateCategorySlug(categoryUrl);
  if (validation.data.message != "success") {
    return notFound();
  }

  return (
    <>
      <ServiceBooking categoryUrl={categoryUrl} />
    </>
  );
};

export default page;
