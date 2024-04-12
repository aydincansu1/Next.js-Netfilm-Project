import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className="text-[72px] uppercase tracking-[-1px] font-black leading-[72px] max-w-[25ch]">
        {title}
      </h1>
      <p
        className={` text-2xl max-w-[50ch] ${isCompact ? "shortOverview" : ""}`}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] w-[300px] text-xl font-bold rounded-full "
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-[2px]  border-[#eee] border-solid rounded-full w-[62px] h-[62px]">
          <FaPlus />
        </button>
      </div>
      <div className="moviePoster">
        <div className="moviePosterOverlay"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
