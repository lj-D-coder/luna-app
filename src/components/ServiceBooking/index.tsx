// pages/cart.js
import { Header } from "./header";
import { Cart } from "./cart";
import { Products } from "./products";

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <Products />
        </div>
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-3xl font-semibold mb-8 ml-5 mt-5">Services we offer!!</h1>
          {/* Banner Image */}
          <div className="relative m-5">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg" // Replace with your image URL
              alt="Banner Image"
              className="w-full h-[150px]"
            />
            {/* You can also place a video here */}
            {/* <video
      src="https://example.com/video.mp4" // Replace with your video URL
      className="w-full h-auto"
      autoPlay
      loop
      muted
    /> */}
          </div>
          {/* End of Banner Image/Video */}

          {/* Cart Component */}
          <Cart />
        </div>

      </div>
    </>
  );
}
