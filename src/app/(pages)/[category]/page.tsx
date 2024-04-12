import { FC } from 'react';
import ServiceBooking  from "@/components/ServiceBooking"; 

interface categoryProps {
  params: {
    category: string;
  };
}

const page: FC<categoryProps> = async ({ params }) => {
  const categoryUrl = params.category 
  console.log(categoryUrl)
  
  return (
        <>
          <ServiceBooking categoryUrl={categoryUrl}/>
        </>
      );
};

export default page;

