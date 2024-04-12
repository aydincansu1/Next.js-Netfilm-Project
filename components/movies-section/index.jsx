import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-[24px] tracking-[-1px] ">{title}</h3>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie " key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
