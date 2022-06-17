import React from "react";
import RowContainer from "../../components/RowContainer";

import Delivery from "../../assets/img/delivery.png";

const data = [
  {
    id: 4,
    image:
      "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/burgers-1.png?width=125.25&height=66&fit=crop&bg-color=fabe00&auto=webp&format=png",
    text: "Burgers",
  },
  {
    id: 2,
    image:
      "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/chicken-wings.png?width=125.25&height=66&fit=crop&bg-color=9c006d&auto=webp&format=png",
    text: "Chicken",
  },
  {
    id: 1,
    image:
      "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/organic.png?width=125.25&height=66&fit=crop&bg-color=00ccbc&auto=webp&format=png",
    text: "Healthy",
  },

  {
    id: 3,
    image:
      "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/acai.png?width=125.25&height=66&fit=crop&bg-color=00ccbc&auto=webp&format=png",
    text: "Breakfast",
  },
];
const images = [
  "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/burgers-1.png?width=125.25&height=66&fit=crop&bg-color=fabe00&auto=webp&format=png",
  "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/chicken-wings.png?width=125.25&height=66&fit=crop&bg-color=9c006d&auto=webp&format=png",
  "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/organic.png?width=125.25&height=66&fit=crop&bg-color=00ccbc&auto=webp&format=png",
  "https://co-restaurants.roocdn.com/images/83f0ca716e138b226c519aa013fdd8afcfcbfc02/shortcut/acai.png?width=125.25&height=66&fit=crop&bg-color=00ccbc&auto=webp&format=png",
];

const Categories = () => {
  return (
    <section
      className="container mx-auto w-full pt-16 lg:pt-32 px-4 md:px-0 mb-2"
      id="home"
    >
      <div className="flex align-center gap-4 mt-8">
        <img src={Delivery.src} alt="delivery" className="w-10 h-10" />
        <p className="mt-2 p-0 font-medium">Food Delivery</p>
      </div>

      <RowContainer scrollValue={0}>
        {data?.map((el, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${el.image})`,
            }}
            className="min-w-[200px] p-16 relative bg-no-repeat bg-cover rounded-sm lg:min-w-[250px] bg-[#123456]"
          >
            <span className="absolute left-4 bottom-4 text-white font-bold">
              {el.text}
            </span>
          </div>
        ))}
        {data?.map((el, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${el.image})`,
            }}
            className="min-w-[200px] p-16 relative bg-no-repeat bg-cover rounded-sm lg:min-w-[250px] bg-[#123456]"
          >
            <span className="absolute left-4 bottom-4 text-white font-bold">
              {el.text}
            </span>
          </div>
        ))}
      </RowContainer>
    </section>
  );
};

export default Categories;
