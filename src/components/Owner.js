import React from "react";
import Images from "../images";

const Owner = () => {
  return (
    <div
      className="block lg:flex bg-[#d3d3d9] font-oswald tracking-wider"
      id="owner"
    >
      <div className="flex-1 place-self-center text-center space-y-2 px-12 py-6">
        <p className="font-semibold">OWNER</p>
        <p className="text-4xl font-semibold pb-4">FRAN MATHERS</p>
        <p>
          Since 1985, I have loved having the opportunity to serve great food{" "}
          <br /> to our wonderful guests in Las Colinas. Thank all of you for
          the <br />
          privilege of hosting your business dinners, birthday celebrations,
          <br /> wedding feasts, and quiet nights out. We're honored that <br />
          you've chosen to spend time with us.
          <br />
          We will always work to earn that privilege.
        </p>
        <div className="flex justify-center">
          <img
            className="h-20 w-36 object-cover"
            src={Images.signature}
            alt="hhh"
          />
        </div>
      </div>
      <div className="flex-1">
        <img
          className="h-[550px] w-full object-cover"
          src={Images.gentleman}
          alt="hh"
        />
      </div>
    </div>
  );
};

export default Owner;
