import React from "react";

const Hero = ({ restaurant }) => {
  return (
    <section
      style={{
        background: `url(${restaurant?.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-no-repeat bg-center bg-cover bg-fixed max-h-48 w-full min-h-[50vh] overflow-hidden lg:pt-36 relative"
    >
      <div className="bg-gradient-to-t from-slate-800 absolute top-0 left-0 w-full h-full"></div>

      <div className="container mx-auto absolute bottom-8 lg:left-[8%] left-2 text-white">
        <h3 className="lg:text-[4rem] text-[2rem] font-bold text-white">
          {restaurant?.name}
        </h3>
        <p className="text-sm ">
          description Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eligendi, sint?
        </p>
      </div>
    </section>
  );
};

export default Hero;
