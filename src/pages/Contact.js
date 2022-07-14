import React from "react";

const Contact = () => {
  return (
    <div id="contact-us" className="font-mono">
      <div className="pt-8 pb-6 md:pt-12 md:pb-8">
        <p className="flex justify-center z-20 text-black font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold bg-white">
          CONTACT US
        </p>
      </div>

      <div className="block md:flex justify-around px-6 pb-8">
        <div className="w-[55%]">
          <iframe
            title="uniqueTitle"
            className="h-[400px] w-full"
            src="https://maps.google.com/maps?q=chitwan%20medical%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="2"
            marginWidth="0"
          ></iframe>
        </div>
        <div className="md:flex-1 place-self-center text-center md:text-left">
          <div className="text-lg md:text-center font-semibold mt-4 md:mt-0">
            <p className="text-2xl">Phone</p>
            <p className="text-orange-700 underline">(972) 650 9001</p>
          </div>
          <div className="flex justify-center items-center ">
            <table className="mt-6 leading-9 text-center ">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Follow us</th>
                </tr>
              </thead>
              <tbody className=" text-sm">
                <tr>
                  <td>Las Colinas Plaza</td>
                  <td>Facebook</td>
                </tr>
                <tr>
                  <td>Irving, Texas 75038</td>
                  <td>Google+</td>
                </tr>
                <tr>
                  <td>4020 N MacArthur Blvd</td>
                  <td>Twitter</td>
                </tr>
                <tr>
                  <td className="text-orange-700 underline">Get directions</td>
                  <td>Yelp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
