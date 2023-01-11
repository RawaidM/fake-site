import React from "react";
import { Link } from "react-router-dom";
import { CategoryList } from "./CategoryList";

const Category = () => {
  return (
    <div className="mt-20 pb-5 pt-44 sm:pt-96">
      <div className="flex flex-col w-11/12 sm:w-8/12 mx-auto text-center">
        <div className="font-poppins font-normal text-xl text-orange-600">
          Popüler Hizmetler
        </div>
        <ul className="font-poppins text-[10px] sm:text-xs text-start flex flex-wrap justify-between mt-4 sm:mt-6">
          {CategoryList.map((cat) => {
            return (
              <li className="lowercase first-letter:uppercase w-3/12 sm:w-2/12 text-ellipsis mt-[2px] mb-2 mr-6 whitespace-nowrap overflow-hidden">
                <Link to="#" className="hover:text-blue-400">
                  <span className="overflow-hidden">{cat}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
