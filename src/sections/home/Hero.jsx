import React from "react";
import Delivery from "../../assets/img/delivery.png";
import HeroBg from "../../assets/img/bg_main.png";
import { heroData } from "../../dummy/data";

const Hero = () => {
  return (
    <section
      className="container mx-auto w-full pt-32 lg:pt-52 px-4 md:px-0 mb-16"
      id="home"
    >
      <div className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)] bg-orange-50 w-[100%] min-h-[130px] flex justify-between align-center py-4 lg:px-[10px] px-4 rounded-md lg:flex-row flex-col">
        <div className="flex flex-1 align-center flex-col justify-center lg:p-8 p-2">
          <h3 className="lg:text-[3rem] text-[2rem] font-medium text-[#2a2b3c] lg:w-[100%]">
            Order Delicious Eats Nstantly
          </h3>
          <p className="lg:text-base text-lg lg:w-96 text-[#989594] my-2 ">
            Hungry? Find the food you crave and order from restaurants easily
            Nstantly.
          </p>
          <a
            href="#"
            className="bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 w-fit rounded-lg hover:shadow-lg transition-all ease-in-out text-white"
          >
            Order Now
          </a>
        </div>

        <div className="flex align-center justify-end lg:pr-16 w-auto h-fit">
          <img src={HeroBg.src} className="w-[50%] h-auto" />
        </div>
      </div>
    </section>
  );
};

// const Hero = () => {
//   return (
// <section
//   className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 w-full pt-32 px-4 md:px-0 pb-16"
//   id="home"
// >
//       <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 px-2 md:px-0">
//         <div className="flex items-center gap-2 justify-center rounded-full bg-orange-100 px-4 py-1">
//           <p className="text-base text-orange-500 font-semibold">
//             Food Delivery
//           </p>
//           <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
//             <img
//               src={Delivery.src}
//               className="w-full h-full object-contain"
//               alt="delivery"
//             />
//           </div>
//         </div>

//         <p className="text-[2.5rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor">
//           Order Delicious Eats to{" "}
//           <span className="text-orange-600 text-[2.5rem] lg:text-[4rem]">
//             Your Door
//           </span>
//         </p>

//         <p className="text-base text-textColor md:text-left md:w-[80%]">
//           Order delivery or pickup from more than 600000 restaurants, retailers,
//           grocers, and more all across your city.
//         </p>

//         <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out mb-16 md:mb-2">
//           Order Now
//         </button>
//       </div>

//       <div className="py-2 flex-1 flex items-center relative">
//         <img
//           src={HeroBg.src}
//           alt="hero bg"
//           className="ml-auto h-420 w-full lg:w-auto lg:h-650"
//         />

//         <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 pt-16 gap-4 flex-wrap">
//           {heroData &&
//             heroData.map((n) => (
//               <div
//                 key={n.id}
//                 className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
//               >
//                 <img
//                   src={n.imageSrc.src}
//                   className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
//                   alt="I1"
//                 />
//                 <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
//                   {n.name}
//                 </p>

//                 <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
//                   {n.decp}
//                 </p>

//                 <p className="text-sm font-semibold text-headingColor">
//                   <span className="text-xs text-red-600">$</span> {n.price}
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default Hero;
