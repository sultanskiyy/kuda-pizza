import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { LanguageContext } from "../context/ChangeLanguage";
import languages from "../translation/Languages";

const Korzina = () => {
    const { cart, increase, decrease, removeFromCart, cartTotal } =
        useContext(CartContext);

    const { lang } = useContext(LanguageContext);
    const t = languages[lang];

    return (
        <div className="container mx-auto px-4 sm:px-5 pt-24 pb-28">
            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                🛒 {t.cart}
            </h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">{t.cart_empty}</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* ================= LEFT: PRODUCTS ================= */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow rounded-xl p-4"
                            >
                                {/* PRODUCT INFO */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <div>
                                        <p className="font-bold text-sm sm:text-base">
                                            {item.title}
                                        </p>
                                        <p className="text-gray-500 text-xs sm:text-sm">
                                            {item.basePrice} × {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center justify-between sm:justify-end gap-4">
                                    {/* - 1 + */}
                                    <div className="flex items-center justify-center bg-orange-500 text-white rounded-full px-3 py-1">
                                        <button
                                            onClick={() => decrease(item.id)}
                                            className="w-8 h-8 flex items-center justify-center text-xl font-bold"
                                        >
                                            −
                                        </button>

                                        <span className="w-6 text-center font-bold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => increase(item.id)}
                                            className="w-8 h-8 flex items-center justify-center text-xl font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* REMOVE */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 font-bold text-xl"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ================= RIGHT: SUMMARY ================= */}
                    <div className="bg-white shadow rounded-xl p-5 sm:p-6 lg:sticky lg:top-24 h-fit">
                        <h2 className="text-lg sm:text-xl font-bold mb-4">
                            {t.order}
                        </h2>

                        <div className="space-y-3 text-sm">
                            {cart.map((item) => {
                                const price = item.basePrice;
                                const discount = item.discount || 0;
                                const finalPrice =
                                    price - (price * discount) / 100;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center gap-2"
                                    >
                                        <span className="text-gray-700">
                                            {item.title} ({item.quantity}x)
                                        </span>

                                        <span className="whitespace-nowrap">
                                            {discount > 0 ? (
                                                <>
                                                    <span className="line-through text-gray-400 mr-1">
                                                        {price * item.quantity}
                                                    </span>
                                                    <span className="text-green-600 font-bold">
                                                        {finalPrice * item.quantity}
                                                    </span>
                                                </>
                                            ) : (
                                                <b>{price * item.quantity}</b>
                                            )}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between text-base sm:text-lg font-bold">
                            <span>{t.total}:</span>
                            <span>{cartTotal}</span>
                        </div>

                        <button className="mt-6 sm:mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-sm sm:text-base">
                            {t.order_now}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Korzina;
