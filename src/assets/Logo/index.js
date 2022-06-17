import React from "react";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundSize: "100%",
        backgroundImage: `linear-gradient(90deg, rgba(5,13,22,0.9750117612688729) 0%, rgba(5,13,22,0.4222027725048279) 55%, rgba(5,13,22,0.0536634466621313) 100%),url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80)`,
        margin: "none !important",
        padding: "0 !important",
      }}
      className="w-100 h-100 relative m-0 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <p
        style={{
          color: "black",
          backgroundColor: "white",
          mixBlendMode: "screen",
          width: "100%",
          height: "100%",
          fontWeight: "bolder",
          lineHeight: "48px",
          margin: 0,
          padding: 0,
          fontSize: "32px",
        }}
      >
        nstant
      </p>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          mixBlendMode: "multiply",
        }}
      ></div>
    </div>
  );
};

export default Logo;
