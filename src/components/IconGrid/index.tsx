"use client";
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Hero from "../Hero";
import { useRouter } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import gsap from "gsap";

export type Category = {
  _id: string;
  categoryName: string;
  categoryLabel: string;
  categoryId: number;
  iconUrl: string;
  subCategory: Array<string>;
};

interface CategoryProps {
  categories: Category[];
  sliderData: [];
}

const IconGrid: React.FC<CategoryProps> = ({ categories, sliderData }) => {
  const router = useRouter();
  const [specialIndices] = useState([1]);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const handleClick = (id: string, categoryName: string) => {
    setCategoryId(id);
    sessionStorage.setItem("categoryId", id.toString());
    router.push(`/${categoryName}`);
  };

  const boxRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
  const box = boxRef.current;

  if (box) {
    // Define your event handlers as separate functions
    const handleMouseOver = () => {
      timeline.pause(); // Pause the timeline
      gsap.to(box, {
        scaleX: 1.05, // Change this to the scale you want in the x direction
        scaleY: 1.05, // Change this to the scale you want in the y direction
        duration: 0.5,
        ease: "power1.inOut",
      });
    };

    const handleMouseOut = () => {
      timeline.resume(); // Resume the timeline
      gsap.to(box, {
        scaleX: 1, // Change this to the scale you want in the x direction
        scaleY: 1, // Change this to the scale you want in the y direction
        duration: 0.5,
        ease: "Ease In Out",
      });
    };

    // Add a hover effect to move the box a little bit
    box.addEventListener("mouseover", handleMouseOver);
    box.addEventListener("mouseout", handleMouseOut);

    // Create a timeline for the animations
    const timeline = gsap.timeline({
      repeat: -1, // Loop the animation indefinitely
      repeatDelay: 1, // Delay between each loop
    });

    timeline
      .set(box, {
        x: window.innerWidth,
        scale: 0.3,
      })
      .to(box, {
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(box, {
        x: window.innerWidth,
        duration: 2,
        ease: "power1.inOut",
        delay: 5,
      });

    return () => {
      // Cleanup when component unmounts
      box.removeEventListener("mouseover", handleMouseOver);
      box.removeEventListener("mouseout", handleMouseOut);
      timeline.kill(); // Stop the timeline
    };
  }
}, []);


  return (
    <>
      <div className="container block h-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between px-2">
          <div className="w-96 md:w-[600px] self-center">
            <h1 className="text-slate-900 text-center text-5xl mb-4">Hassle-free!</h1>
            <h1 className="box text-slate-700 text-center text-3xl font-semibold tracking-wider mb-12">
              Doorstep professional services.
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto align-bottom">
              {categories.map((data, index) => (
                <div
                  key={index}
                  className="col-span-1 md:col-span-1 cursor-pointer flex flex-col items-center text-slate-900 hover:text-sky-400"
                >
                  <div
                    className={cn(
                      "w-[120px] h-[120px] card-hover-effects border-none shadow-none",
                      specialIndices.includes(index)
                    )}
                  >
                    <Image
                      src={data.iconUrl}
                      alt={data.categoryLabel}
                      fill
                      onClick={() => handleClick(data._id, data.categoryName)}
                    />
                  </div>
                  <div className="text-center font-medium mt-2">{data.categoryLabel}</div>{" "}
                  {/* Added text-center class */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center p-10 lg:flex lg:items-start">
            <div
              ref={boxRef}
              className="box w-96 md:w-[600px] lg:w-[700px] 2xl:w-[800px] h-auto md:h-auto border-none shadow-none"
            >
              <Hero sliderData={sliderData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconGrid;
