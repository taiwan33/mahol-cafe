import React from "react";
import Images from "../images";

const Items = () => {
  const foods = [
    { index: "one", name: "Cake" },
    { index: "two", name: "Chapati" },
    { index: "three", name: "Pizza" },
    { index: "four", name: "Burger" },
    { index: "five", name: "Jerry" },
    { index: "six", name: "Fried fish" },
    { index: "food2", name: "Roll" },
    { index: "eight", name: "Rice" },
  ];
  return (
    <div className="my-8" id="gallery">
      <div className="grid gap-4 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food, i) => {
          return (
            <div className="item-css relative" key={i}>
              <img
                src={Images[food.index]}
                alt=""
                className="h-full w-full item-hover"
              />
              <p className="absolute z-20 bottom-[50%] right-[50%] text-center pt-[30%] text-2xl font-medium text-white opacity-0 hover:opacity-100 h-full w-full bg-gray-600 bg-opacity-50 transition-all duration-500 translate-y-1/2 translate-x-1/2">
                {food.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
