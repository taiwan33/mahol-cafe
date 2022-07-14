import React from "react";
import Images from "../images";

const Cards = () => {
  return (
    <div id="cards" className="font-oswald mt-8 space-y-9">
      <div className="block md:flex lg:justify-around px-6">
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <img
            className="h-[300px] lg:h-[400px] xl:h-[450px]"
            src={Images.four}
            alt="table"
          />
        </div>
        <div className="flex-1 space-y-5 text-center tracking-wider px-[5%] place-self-center mt-4">
          <p className="text-4xl font-bold ">GIFT CARD</p>
          <p className="text-xl pb-4">
            Present a Gift Card to your family, friends and business colleagues.
          </p>
          <button className="button">PURCHASE GIFT CARD</button>
        </div>
      </div>
      <div className="flex md:flex md:flex-row flex-col-reverse lg:justify-between mb-8 px-6">
        <div className="flex-1 space-y-5 px-8 pt-4 text-center tracking-wider place-self-center">
          <p className="text-4xl font-bold">JOIN THE REÁL DEAL</p>
          <p className="text-xl">
            Our monthly newsletter will keep you up to date on our latest
            special occasions, important dates, recognitions, scholarship
            program, and any guest incentives available. We care about our
            guests' privacy, and will never sell or rent your information.
          </p>
          <button className="button">JOIN HERE</button>
        </div>
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <img
            className="h-[300px] lg:h-[400px] xl:h-[450px]"
            src={Images.six}
            alt="table"
          />
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className=" h-[500px] w-full object-cover bg-[url('/src/images/back.webp')]">
          <div className=" right-8 top-[20%] px-14 text-center absolute text-black font-semibold tracking-wider">
            <p className="text-xl pb-3">JOIN TODAY</p>
            <p className="text-5xl pb-6">JOIN THE REÁL DEAL</p>
            <p className="font-medium text-xl pb-6">
              Our monthly newsletter will keep you up to date on our latest
              special occasions,
              <br /> important dates, recognitions, scholarship program, and any
              guest incentives available.
              <br /> We care about our guests' privacy, and will never sell or
              rent your information.
            </p>
            <button className="button">JOIN HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
