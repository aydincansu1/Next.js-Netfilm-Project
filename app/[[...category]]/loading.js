import CategoriesLoading from "@/components/categories/loading";
import FeaturedMovieLogin from "@/components/featured-movie/login";
import MoviesSectionLoading from "@/components/movies-section/loading";

import React from "react";
const Loading = () => {
  return (
    <div>
      <FeaturedMovieLogin />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
};

export default Loading;
