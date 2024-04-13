"use client";
import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Operation } from "./Quantifier";
import { CartProps } from "./products";
import { usePathname } from "next/navigation";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";


export const Cart: FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [next, setNext] = useState(false);
    const [success, setSuccess] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    const handleCheckout = () => {
        console.log("Checkout clicked. Cart details:", cart);
        console.log(totalPrice);
        setOpen(true);
    };

    const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
    const location = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleRemoveProduct = (productId: number): void => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            delete updatedCart[productId];
            return updatedCart;
        });
    };

    const handleUpdateQuantity = (productId: number, operation: Operation) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                if (operation === "increase") {
                    updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 };
                } else if (operation === "decrease" && updatedCart[productId].quantity > 1) {
                    updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 };
                }
            }
            return updatedCart;
        });
    };

    const getProducts = () => Object.values(cart || {});

    const totalPrice = getProducts().reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);

    return (
        <section className="p-4 mt-2 relative">
            <div className="w-full mx-auto mt-1">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-semibold mb-8 mt-5">Services we offer!!</h1>
                    <Image
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"
                        alt="Banner Image"
                        width={310} height={200}
                        style={{ objectFit: "cover", overflow: "hidden" }} />
                    <h2 className="text-lg font-semibold">Cart</h2>
                    <div className="border-t mt-4 pt-4">
                        <h3 className="font-medium text-gray-700">Power Saver AC service</h3>
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border rounded-md">
                                <button className="text-gray-600 px-3 py-1 border-r">-</button>
                                <input type="text" className="text-center w-10" value="1" />
                                <button className="text-gray-600 px-3 py-1 border-l">+</button>
                            </div>
                            <span className="text-gray-900 font-semibold">₹669</span>
                        </div>
                        <div className="flex items-center mt-3">
                            <i className="fas fa-info-circle text-green-500 mr-2"></i>
                            <span className="text-sm text-green-500">Add 1 more service, Get ₹100 off 2nd one onwards</span>
                        </div>
                    </div>
                    <div className="border-t mt-4 pt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-semibold">₹669</span>
                            <button className="bg-purple-600 text-white rounded-md px-6 py-2">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>



        // <section className="p-4 mt-10 relative">
        //   <h1 className="text-3xl font-semibold mb-8">Cart</h1>
        //   <div className="grid grid-cols-1 gap-4">
        //     {getProducts().map((product) => (
        //       <div key={product.id} className="border rounded-lg overflow-hidden">
        //         <div className="flex p-4 border-b">
        //           <img className="w-20 h-20 object-cover mr-4" src={product.thumbnail} alt={product.title} />
        //           <div className="flex-grow">
        //             <h3 className="text-blue-600 font-bold text-lg mb-1">{product.title}</h3>
        //             <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
        //           </div>
        //           <Quantifier
        //             removeProductCallback={() => handleRemoveProduct(product.id)}
        //             productId={product.id}
        //             handleUpdateQuantity={handleUpdateQuantity}
        //           />
        //         </div>
        //         <div className="p-4">
        //           <p className="text-gray-600">
        //             Total: <span className="font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
        //           </p>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        //   <TotalPrice amount={totalPrice} />
        //   {totalPrice > 0 && (
        //     <div className="mt-6 flex justify-center z-50">
        //       <button
        //         onClick={handleCheckout}
        //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        //       >
        //         Checkout
        //       </button>
        //     </div>
        //   )}
        //   <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        //     {!success && (
        //       <BookingCalender
        //         open={open}
        //         next={next}
        //         setNext={setNext}
        //         setSelectedDate={setSelectedDate}
        //         setSelectedTime={setSelectedTime}
        //       />
        //     )}
        //     {next && (
        //       <FormComponent
        //         success={success}
        //         setSuccess={setSuccess}
        //         selectedDate={selectedDate}
        //         selectedTime={selectedTime}
        //       />
        //     )}
        //   </Drawer>
        // </section>
    );
};
