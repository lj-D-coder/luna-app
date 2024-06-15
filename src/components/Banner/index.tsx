import React from "react";
import Image from "next/image";
import Link from "next/link";

export type BannerModel = {
  bannerId: string;
  bannerUrl: string;
  serviceId: number;
};

interface BannerProps {
  banners: BannerModel[];
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
  // Check if banners array is empty
  if (banners.length === 0) {
    return null; // Render nothing if the array is empty
  }

  return (
    <div className="w-screen p-4 md:px-10 bg-white">
      <div className="bg-white w-full rounded-lg overflow-hidden transition duration-300">
        <div className="relative card-hover-effects">
          <Link href="#">
            <div className="w-full">
              <Image
                src={banners[0].bannerUrl}
                alt="banner image"
                width={1232}
                height={350}
                className="object-cover w-full h-auto md:h-[350px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
