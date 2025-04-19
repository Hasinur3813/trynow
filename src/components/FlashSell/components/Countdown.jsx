import React, { useEffect, useState } from "react";
import { countdown } from "../../../utils/countdown";

const DealCountdown = () => {
  // Set your end time here (adjust as needed)
  const endTime = new Date("2025-04-25T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = countdown(endTime, ({ days, hours, minutes, seconds }) => {
      setTimeLeft({
        days: String(days).padStart(2, "0") + "D",
        hours: String(hours).padStart(2, "0") + "H",
        minutes: String(minutes).padStart(2, "0") + "M",
        seconds: String(seconds).padStart(2, "0") + "S",
      });
    });

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="p-3 mt-5 bg-white border border-gray-300 rounded-full flex justify-between items-center max-w-md w-full">
      <p className="text-black font-bold text-xl">Deal of The Day</p>
      <div className="flex gap-3 items-center">
        <span>End in:</span>
        <div className="flex gap-2">
          <span className="rounded-md bg-[#4ab6e1] text-white flex justify-center items-center p-1 min-w-[40px]">
            {timeLeft.days}
          </span>
          <span className="rounded-md bg-[#4ab6e1] text-white flex justify-center items-center p-1 min-w-[40px]">
            {timeLeft.hours}
          </span>
          <span className="rounded-md bg-[#4ab6e1] text-white flex justify-center items-center p-1 min-w-[40px]">
            {timeLeft.minutes}
          </span>
          <span className="rounded-md bg-[#4ab6e1] text-white flex justify-center items-center p-1 min-w-[40px]">
            {timeLeft.seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DealCountdown;
