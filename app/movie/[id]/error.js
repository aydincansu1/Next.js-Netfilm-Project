"use client";
import React from "react";
import Link from "next/link";

const Eror = () => {
  return (
    <div className="flex items-center justify-center flex-col not h-full  ">
      <h1>An error has occurred. Sorry for that! </h1>
      <Link className="underline text-[20px] mt-2" href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default Eror;
