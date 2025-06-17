// import { useState } from "react";

type Props = {
    subtotal: number;
};

export default function CartSummarySidebar({ subtotal }: Props) {
    // Coupon Logic (create a an array of codes, and control the input of the user with the array)
    // const [coupon, setCoupon] = useState("");

    // Discount Logic (now static)
    const percentageDiscount = 5;
    const discount = subtotal * percentageDiscount / 100
    const total = subtotal - discount;

    return (
        <div className="w-1/3 bg-white rounded-xl shadow-lg p-6 h-fit my-8">
            {/* Sezione: Spedizione */}
            <h2 className="text-lg font-semibold mb-4">Calculated Shipping</h2>

            <form className="flex flex-col gap-4">

                <select
                    id="country"
                    className="rounded-2xl px-3 py-2 text-sm bg-gray-200 focus:outline-none"
                    defaultValue=""
                >
                    <option value="" disabled hidden>
                        Country
                    </option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>France</option>
                </select>

                <div className="flex gap-3">
                    <select
                        id="city"
                        className="w-1/2 rounded-2xl px-3 py-2 text-sm bg-gray-200 focus:outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            State/City
                        </option>
                        <option>Rimini</option>
                        <option>Milan</option>
                        <option>Rome</option>
                    </select>
                    <input
                        type="text"
                        id="zip"
                        className="border border-gray-400 rounded-2xl px-3 py-2 text-sm w-1/2"
                        placeholder="ZIP Code"
                    />
                </div>

                <button
                    className="bg-black text-white rounded-2xl p-1.5 mt-2 hover:bg-gray-900 transition cursor-pointer"
                >
                    Update
                </button>
            </form>

            <div className="my-6 h-0.5 bg-gray-200" />

            {/* Sezione: Codice sconto */}
            <div className="mt-6">
                <h3 className="text-base font-semibold mb-2">Coupon Code</h3>
                <p className="text-sm text-gray-500 mb-3">Enter your coupon code if you have one.</p>
                <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        className="border border-gray-400 rounded-2xl p-3 py-2 text-sm w-full"
                        placeholder="Enter coupon"
                    />
                    <button className="bg-black text-white p-1.5 rounded-2xl hover:bg-gray-900 transition cursor-pointer">
                        Apply
                    </button>
                </div>
            </div>

            {/* Sezione: Totale carrello */}
            <div className="mt-8 bg-orange-200 rounded-xl p-4">
                <h3 className="text-base font-semibold mb-4">Cart Total</h3>
                <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2 text-gray-500 ">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between text-sm mb-2 text-green-600 font-semibold">
                    <span>Discount</span>
                    <span>– €{discount.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
                <button className="bg-white mt-4 w-full p-1.5 rounded-2xl hover:bg-gray-100 transition cursor-pointer">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
