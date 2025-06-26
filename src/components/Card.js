import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="flex flex-col items-center">
    
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-left md:justify-start w-full">
        <div className="relative mx-auto md:mx-0 md:mt-0">
          <img
            src={review.image}
            alt={review.name}
            className="aspect-square rounded-full w-[140px] h-[140px] z-10 relative"
          />
          <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]"></div>
        </div>

        <div className="mt-6 md:mt-0">
          <p className="font-bold text-2xl capitalize">{review.name}</p>
          <p className="text-violet-300 text-sm uppercase mt-2">{review.job}</p>
        </div>
      </div>

     
      <div className="text-violet-400 mx-auto mt-6 text-2xl">
        <FaQuoteLeft />
      </div>

      <p className="text-center mt-4 text-slate-500 px-2">{review.text}</p>

      <div className="text-violet-400 mx-auto mt-4 text-2xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
