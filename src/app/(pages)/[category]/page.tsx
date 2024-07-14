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
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <ServiceBooking categoryUrl={categoryUrl} />
    </>
  );
};

export default page;
