import React, { useEffect, useRef } from "react";

const RowContainer = ({ styles, scrollValue, children }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`first-letter:w-full flex items-center  scroll-smooth overflow-x-scroll scrollbar-none my-2 ${styles}`}
    >
      {children}
    </div>
  );
};

export default RowContainer;
