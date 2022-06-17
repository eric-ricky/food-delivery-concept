import React from "react";
import RowContainer from "../../components/RowContainer";
import Delivery from "../../assets/img/delivery.png";
import HeroBg from "../../assets/img/bg_main.png";

const herodata = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    title: "The food you want, faster",
    action: "Explore",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Order Delicous Eats Instantly",
    action: "Explore",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2022/05/19/20/21/fried-legs-7208116_960_720.jpg",
    title: "Restaurant to your door step",
    action: "Explore",
  },
];

const Hero = () => {
  return (
    <section
      className="container mx-auto w-full pt-2 lg:pt-4 px-4 md:px-0 mb-8"
      id="home"
    >
      <div className="flex align-center gap-8 w-[100%]">
        <RowContainer scrollValue={0} styles="lg:gap-16 gap-4 my-4">
          {herodata?.map((data) => (
            <div
              key={data.id}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(5,13,22,0.9750117612688729) 0%, rgba(5,13,22,0.4222027725048279) 55%, rgba(5,13,22,0.0536634466621313) 100%),url(${data.image})`,
                backgroundPosition: "center",
              }}
              className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)] rounded-lg py-10 px-6 min-w-[290px] lg:min-w-1/1 "
            >
              <h3 className="lg:text-[2rem] text-[1.7rem] font-medium text-[#f3f3f5] lg:w-[100%] z-index-1">
                {data.title}
                {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span class="relative text-white">Delicious</span>{" "}
              </span> */}
              </h3>

              {/* <p class="text-2xl font-semibold italic text-start text-white mt-4">
                Explore
              </p> */}
            </div>
          ))}
        </RowContainer>
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
