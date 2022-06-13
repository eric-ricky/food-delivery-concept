import React from "react";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <p
      className=" text-3xl font-bold cursor-pointer "
      onClick={() => router.push("/")}
    >
      <span className="not-italic font-extrabold text-3xl">n</span>
      stant
    </p>
  );
};

export default Logo;
