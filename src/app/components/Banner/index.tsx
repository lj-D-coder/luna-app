import React from "react";
import Image from "next/image";
import Link from 'next/link';

const banner = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: "",
  },
];

const Banner = () => {
  return (
    <div className="w-full mx-auto p-24 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 bg-slate-200">
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <div className="relative h-[300px]">
          <Link href="/your-desired-path">
            <Image src="https://i.imgur.com/8DYumaY.jpg" alt="banner image" layout="fill" objectFit="cover" />
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
