import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const rightShiftHandler = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const surpriseShiftHandler = () => {
    let randIndex = Math.floor(Math.random() * reviews.length);
    while (randIndex === index) {
      randIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(randIndex);
  };

  return (
    <div className="w-[90vw] max-w-[700px] bg-white justify-center items-center mt-10 p-6 sm:p-10 transition-all duration-700 hover:shadow-xl rounded-md mx-auto">
      <Card review={reviews[index]} />

      {/* Buttons for left/right */}           
      <div className="flex text-3xl mt-5 gap-4 text-violet-400 font-bold justify-center">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Surprise Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseShiftHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
