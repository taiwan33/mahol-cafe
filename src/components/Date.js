import React, { useState } from "react";

const Date = () => {
  let curDT = new window.Date().toLocaleString();
  const [time, setTime] = useState(curDT);

  const curTime = () => {
    curDT = new window.Date().toLocaleString();
    setTime(curDT);
  };
  setInterval(curTime, 1000);
  return (
    <div className=" py-3 w-full bg-[#bc8d4b] flex items-center justify-center text-sm md:text-lg cursor-pointer text-white">
      <p>Current Date & Time: {time}</p>
    </div>
  );
};

export default Date;
