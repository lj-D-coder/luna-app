import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const FloatingSocial = () => {
  const socialBoxRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const socialBox = socialBoxRef.current;

    if (socialBox) {
      // Define your event handlers as separate functions
      const handleMouseOver = () => {
        timeline.pause(); // Pause the timeline
        gsap.to(socialBox, {
          scaleX: 1.05, // Change this to the scale you want in the x direction
          scaleY: 1.05, // Change this to the scale you want in the y direction
          duration: 0.5,
          ease: "power1.inOut",
        });
      };

      const handleMouseOut = () => {
        timeline.resume(); // Resume the timeline
        gsap.to(socialBox, {
          scaleX: 1, // Change this to the scale you want in the x direction
          scaleY: 1, // Change this to the scale you want in the y direction
          duration: 0.5,
          ease: "Ease In Out",
        });
      };

      // Add a hover effect to move the socialBox a little bit
      socialBox.addEventListener("mouseover", handleMouseOver);
      socialBox.addEventListener("mouseout", handleMouseOut);

      // Create a timeline for the animations
      const timeline = gsap.timeline();

      timeline
        .set(socialBox, {
          x: -100,
          scale: 0.3,
        })
        .to(socialBox, {
          x: 0,
          scale: 1,
          duration: 3,
          ease: "power1.inOut",
        })

      return () => {
        // Cleanup when component unmounts
        socialBox.removeEventListener("mouseover", handleMouseOver);
        socialBox.removeEventListener("mouseout", handleMouseOut);
        timeline.kill(); // Stop the timeline
      };
    }
  }, []);

  return (
    <div ref={socialBoxRef} className="hidden md:block w-8 h-auto fixed left-0 top-1/2 transform translate-y-[-50%] z-50">
      <div
        className="flex flex-col justify-center items-center  border border-black/10"
      // style={{
      //   background: "linear-gradient(0deg, rgba(239,197,123.5) 0%, rgba(115,131,191,0.7) 100%)",
      // }}
      >
        <a href="https://www.facebook.com/luna.naanna/" className="my-4 text-neutral-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a href="#!" className="my-4 text-neutral-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="#000000" viewBox="0 0 512 512">
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
        <a href="http://www.youtube.com/@LUNANAANNA" className="my-4 text-neutral-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#FF0000" viewBox="0 0 576 512">
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/luna.naanna/" className="my-4 text-neutral-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;