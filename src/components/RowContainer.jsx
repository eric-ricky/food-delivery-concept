import React, { useEffect, useRef } from "react";

const RowContainer = ({ scrollValue, children }) => {
  const rowContainer = useRef();

  useEffect(() => {
    console.log(scrollValue);
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className="first-letter:w-full flex items-center lg:gap-16 gap-4 my-2 scroll-smooth overflow-x-scroll scrollbar-none"
    >
      {children}
    </div>
  );
};

export default RowContainer;
