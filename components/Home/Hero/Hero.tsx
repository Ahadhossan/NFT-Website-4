import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-13vh)] w-full flex justify-center flex-col ">
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* text content */}
        <div className="col-span-2">
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold aos-init aos-animate"
          >
            Buy, Sell and collect NFTs.
          </h1>
          <p
            className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium aos-init aos-animate"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            repellat corporis provident inventore nobis fuga dolores esse
            adipisci assumenda pariatur?
          </p>
          <div className="flex items-center space-x-2 mt-10">
            <button
              className="w-36 rounded-full py-3 px-8 text-center bg-blue-900 font-semibold text-white transition-all hover:bg-blue-950 aos-init aos-animate"
            >
              Upload
            </button>
            <button
              className="w-36 rounded-full bg-rose-900 py-3 px-8 text-center font-semibold text-white transition-all hover:bg-rose-950 aos-init aos-animate"
            >
              Explor
            </button>
          </div>
        </div>
        {/* image  content*/}
        <div
          className="col-span-3 aos-init aos-animate"
        >
          <Image src="/images/hero2.png" alt="hero" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
