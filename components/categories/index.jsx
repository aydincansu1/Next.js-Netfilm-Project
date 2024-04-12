import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="flex h-[72px] gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className="flex items-center justify-center bg-black border-[1px] border-solid border-[#333] w-full h-full rounded-md font-bold "
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
