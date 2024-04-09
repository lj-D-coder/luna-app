import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homecleaningimg } from "@/assets/images/index";

const banner = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: homecleaningimg,
  },
];

const Banner = () => {
  return (
    <div className="w-full p-5 lg:p-20 bg-white">
      <div className="bg-white w-full rounded-lg overflow-hidden transition duration-300">
        <div className="relative card-hover-effects">
          <Link href="/your-desired-path">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"
              alt="banner image"
              layout="responsive"
              width={1232}
              height={692}
              objectFit="cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
