import React from "react";
import Images from "../images/index";

const About = () => {
  return (
    <div id="about-us" className="text-center font-sans bg-[#E6E6FA] ">
      <p className="flex justify-center pt-12 pb-8 z-20 text-black font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold bg-white">
        ABOUT US
      </p>
      <div>
        <div>
          <img
            className="h-[550px] w-full object-cover "
            src={Images.group}
            alt="pic"
          />
        </div>
        <p className="tracking-wider py-[2.4%] px-[9%] text-sm md:text-base font-poppins">
          Francie, after much delay, debuted in December 2020, and is the first
          independent collaboration between Chef-Owner Christopher Cipollone
          (Piora, Cotogna) and Owner-Operator John Winterman (Bâtard, Daniel).
          Francie is located on the corner of Broadway & Bedford in the heart of
          Williamsburg, Brooklyn, and has the convivial feel of a neighborhood
          brasserie. Located in a limestone-clad former bank building, Francie
          serves an approachable menu inspired by European flavors and designed
          for flexibility: snacks, shellfish, and first courses, followed by
          handmade pastas and main courses. Inspired choices include The Market
          Salad, Lobster Ravioli, Heritage Pork Chop, and Côte de Boeuf for Two.
          Save room for the Cheese Cart. The timeless space, designed by
          architect Glen Coben, is brought together by the open kitchen, a focal
          point that beckons both neighbors and guests to the warmth of the
          dining room.
        </p>
      </div>
    </div>
  );
};

export default About;
