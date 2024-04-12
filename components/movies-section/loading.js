import React from "react";
import { Skeleton } from "../skeleton";

const MoviesSectionLoading = () => {
  return (
    <div className="mt-9">
      <Skeleton width={128} height={36} />
      <div className="movies">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default MoviesSectionLoading;
