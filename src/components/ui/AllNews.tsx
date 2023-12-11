"use client";
import React, { useEffect, useState } from "react";
import NewsCart from "./NewsCart";
import { SearchContext } from "../context/seatchContext";
import NewsLoader from "../shaired/NewsLoader";

export interface INews {
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  created_at_i: number;
}

const AllNews = () => {
  const [newses, setNewses] = useState([]);
  const { state }: any = React.useContext(SearchContext);
  const searchData = state?.query;

  const url = `http://hn.algolia.com/api/v1/search?query=${searchData}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewses(data?.hits));
  }, [searchData, url]);

  return (
    <div className="mx-12">
      <ul className="my-7 list-disc">
        {newses.length ? (
          newses?.map((news: INews) => (
            <NewsCart news={news} key={news?.story_id} />
          ))
        ) : (
          <NewsLoader />
        )}
      </ul>
    </div>
  );
};
export default AllNews;
