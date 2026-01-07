import React, { memo, useContext } from "react";
import { LanguageContext } from "../context/ChangeLanguage";
import languages from "../translation/Languages";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const t = languages[lang];

  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg mb-3">
              🍕 {t.footer_company}
            </div>
            <p className="text-xs text-gray-400">
              © 2021 — {t.footer_company}
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-bold text-black mb-3">
              {t.footer_company}
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer">
                {t.about_company}
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                {t.user_agreement}
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                {t.warranty}
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="font-bold text-black mb-3">
              {t.help}
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer">
                {t.restaurant}
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                {t.contacts}
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                {t.support}
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                {t.track_order}
              </li>
            </ul>
          </div>

          {/* CONTACTS */}
          <div>
            <h3 className="font-bold text-black mb-3">
              {t.contacts}
            </h3>
            <ul className="space-y-2">
              <li>📞 +7 (926) 223-10-11</li>
              <li>
                📍 {t.address}: Москва, ул. Нижняя Ленина, д. 99
              </li>
              <li className="flex gap-3 mt-3">
                <span className="cursor-pointer hover:text-orange-500">
                  <FaFacebook className="w-6 h-6"/>
                </span>
                <span className="cursor-pointer hover:text-orange-500">
                  <FaInstagram className="w-6 h-6"/>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t py-4 text-center text-xs text-gray-400">
        © 2021 {t.footer_company}. {t.copyright}
      </div>
    </footer>
  );
};

export default memo(Footer);
