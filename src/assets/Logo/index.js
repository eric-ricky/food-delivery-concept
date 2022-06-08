import React from "react";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <p
      className="text-orange-500 text-3xl font-bold cursor-pointer "
      onClick={() => router.push("/")}
    >
      <span className="not-italic font-extrabold text-4xl text-orange-700">
        N
      </span>
      stant
    </p>
  );
};

export default Logo;
