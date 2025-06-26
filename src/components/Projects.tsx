import React from "react";

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="h-50 w-100 m-5 relative ">
          <img
            src="assets\Projects\Tinder.jpeg"
            alt="Dev-Tinder"
            className=" h-50 w-100 object-center absolute rounded-4xl hover:scale-105 hover:brightness-125 transition duration-300 cursor-pointer"
          />
        </div>
        
        <div className="relative group w-100 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\Tinder.jpeg"
            className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
          />
          <div className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-blue-100 bg-opacity-0 opacity-0 group-hover:opacity-100 transition duration-300 text-white text-xl font-semibold">
            Hover Text Here
          </div>
        </div>

        <div> Project1</div>
        <div> Project1</div>
        <div> Project1</div>
        <div> Project1</div>
        <div> Project1</div>
      </div>
    </>
  );
}
