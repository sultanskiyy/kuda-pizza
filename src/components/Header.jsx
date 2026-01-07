import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/ChangeLanguage";
import languages from "../translation/Languages";
import { CartContext } from "./context/CartContext";

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { cartTotal } = useContext(CartContext);
  const t = languages[lang];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
      <div className="hidden lg:block bg-white border-b">
        <div className="container mx-auto px-5 h-[44px] flex items-center justify-between text-[14px] text-gray-600">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:text-orange-500">
              {t.city} <span className="text-[10px]">▼</span>
            </button>
            <button className="hover:text-orange-500">
              {t.check_address}
            </button>
            <span>
              {t.delivery_time}:{" "}
              <b className="ml-1 text-black">00:24:19</b>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>
              {t.work_time}: 11:00–23:00
            </span>
            <button className="hover:text-orange-500">
              {t.login}
            </button>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded-lg px-2 py-1 text-sm outline-none cursor-pointer"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-5 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-orange-500 font-bold text-lg sm:text-xl"
          >
            🍕 Куда пицца
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* LANGUAGE (MOBILE) */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="lg:hidden border rounded-lg px-2 py-1 text-sm outline-none cursor-pointer"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>

            {/* CART */}
            <Link
              to="/korzina"
              className="flex items-center gap-2 bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition text-sm sm:text-base"
            >
              🛒 {cartTotal} {t.price}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
