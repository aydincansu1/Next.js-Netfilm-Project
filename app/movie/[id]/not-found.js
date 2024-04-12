import React from "react";
import Link from "next/link";
const Movie404 = () => {
  return (
    <div className="flex items-center justify-center flex-col not h-full ">
      <h1>We couldn&apos;t find the movie you looking for! </h1>
      <Link className="underline text-[20px] mt-2" href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default Movie404;
