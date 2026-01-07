import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../../context/ChangeLanguage";
import { CartContext } from "../../components/context/CartContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomePage = () => {
  const { lang } = useContext(LanguageContext);
  const { cart, addToCart, increase, decrease } = useContext(CartContext);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  async function getCategories() {
    const res = await axios.get(
      "https://693d1ae6f55f1be79301e90f.mockapi.io/categories"
    );
    setCategories(res.data);
    if (res.data.length > 0) setSelectCategory(res.data[0].id);
  }

  async function getProducts() {
    const res = await axios.get(
      "https://693d1ae6f55f1be79301e90f.mockapi.io/products"
    );
    setProducts(res.data);
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <section className="pt-24">
      <div className="container mx-auto px-5">

        <div className="flex gap-5 pt-5 pl-45 overflow-x-auto pb-4">
          {categories.map((el) => (
            <div
              key={el.id}
              onClick={() => setSelectCategory(el.id)}
              className={`min-w-[120px] h-[120px] cursor-pointer rounded-2xl flex flex-col items-center justify-center gap-2 shadow-md transition
                ${selectCategory === el.id
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-100"}`}
            >
              <img
                src={el.icon}
                alt={el.title}
                className={`w-10 h-10 ${selectCategory === el.id ? "invert" : ""}`}
              />
              <p className="font-bold text-sm">{el.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products
              .filter((p) => p.categoryId === selectCategory)
              .map((el) => {
                const cartItem = cart.find((i) => i.id === el.id);

                return (
                  <SwiperSlide key={el.id}>
                    <div className="bg-white rounded-2xl shadow-md p-4 text-center">
                      <img
                        src={el.image}
                        alt={el.title}
                        className="h-40 mx-auto object-contain"
                      />

                      <p className="mt-3 font-bold">{el.title}</p>

                      <div className="flex justify-center items-center gap-4 mt-4">
                        {!cartItem ? (
                          <button
                            onClick={() => addToCart(el)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold"
                          >
                            {lang === "uz" && "Savatchaga qo‘shish"}
                            {lang === "ru" && "Добавить в корзину"}
                            {lang === "en" && "Add to Cart"}
                          </button>
                        ) : (
                          <div className="flex items-center gap-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                            <button onClick={() => decrease(el.id)}>-</button>
                            <span className="font-bold">
                              {cartItem.quantity}
                            </span>
                            <button onClick={() => increase(el.id)}>+</button>
                          </div>
                        )}
                        <p className="font-bold">{el.basePrice}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className="mt-12 mb-14 bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">
              {lang === "uz" && "Yetkazib berish manzilini tekshirish"}
              {lang === "ru" && "Проверить адрес доставки"}
              {lang === "en" && "Check delivery address"}
            </h3>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder={
                lang === "uz"
                  ? "Manzilni kiriting"
                  : lang === "ru"
                    ? "Введите адрес"
                    : "Enter address"
              }
              className="border px-4 py-2 rounded-lg w-full md:w-220 outline-none"
            />
            <button className="bg-orange-500 text-white px-6 rounded-lg">
              {lang === "uz" && "Tekshirish"}
              {lang === "ru" && "Проверить"}
              {lang === "en" && "Check"}
            </button>
          </div>
        </div>

        <div className="mt-10">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{cat.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.categoryId === cat.id)
                  .map((el) => {
                    const cartItem = cart.find((i) => i.id === el.id);

                    return (
                      <div
                        key={el.id}
                        className="bg-white rounded-2xl shadow-md p-4 text-center"
                      >
                        <img
                          src={el.image}
                          alt={el.title}
                          className="h-40 mx-auto object-contain"
                        />

                        <p className="mt-3 font-bold">{el.title}</p>

                        <div className="flex justify-center items-center gap-4 mt-4">
                          {!cartItem ? (
                            <button
                              onClick={() => addToCart(el)}
                              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                            >
                              {lang === "uz" && "Savatchaga qo‘shish"}
                              {lang === "ru" && "Добавить"}
                              {lang === "en" && "Add"}
                            </button>
                          ) : (
                            <div className="flex items-center gap-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                              <button onClick={() => decrease(el.id)}>-</button>
                              <span>{cartItem.quantity}</span>
                              <button onClick={() => increase(el.id)}>+</button>
                            </div>
                          )}
                          <p className="font-bold">{el.basePrice}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomePage;
