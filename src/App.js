import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-200 py-6 px-4">
      
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/3 md:w-1/5 mt-1 mx-auto"></div>
      </div>

     
      <Testimonial reviews={reviews} />
    </div>
  );
};

export default App;