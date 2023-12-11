/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FormEvent } from "react";
import { SearchContext } from "../context/seatchContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { dispatch }: any = React.useContext(SearchContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const searchData = event.target.search.value;
    dispatch({ type: "SEARCH", payload: searchData });
    router.push("/");
  };
  return (
    <div className="bg-gray-300/30 backdrop-blur-xl py-3 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-none">{/* logo  */}</div>
            <div>
              <Link
                href={"/"}
                className="cursor-pointer text-2xl font-semibold text-gray-800 font-mono"
              >
                Hacker News
              </Link>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-white p-1 border"
                placeholder="Search"
                name="search"
              />
              <input
                type="submit"
                value="Search"
                className="p-[3px] px-2 bg-gray-800 text-white mx-2 hover:rounded-md cursor-pointer"
              />
            </form>
          </div>
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://thumbs.dreamstime.com/b/male-avatar-profile-picture-vector-illustations-91554015.jpg"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
