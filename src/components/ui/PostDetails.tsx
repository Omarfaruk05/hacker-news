"use client";

import { useEffect, useState } from "react";
import Comment from "./Comment";
import PostDetailsLoader from "../shaired/PostDetailsLoader";

interface IPostDetails {
  author: string;
  children: [];
  created_at_i: number;
  id: number;
  options: [];
  parent_id: any;
  points: number;
  story_id: number;
  text: string | null;
  title: string;
  type: string;
  url: string;
}

const PostDetails = ({ id }: { id: string }) => {
  const [postDetails, setPostDetails] = useState<IPostDetails | undefined>();

  const url = `http://hn.algolia.com/api/v1/items/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostDetails(data));
  }, [url]);

  if (!postDetails) {
    return <PostDetailsLoader />;
  }
  return (
    <div className="p-2 my-4">
      <h2 className="text-4xl font-semibold">
        Title: <span className="text-gray-600"> {postDetails?.title}</span>
      </h2>
      <p>
        Points: <span className="text-sky-600"> {postDetails?.points}</span>
      </p>
      <div>
        <h3 className="text-xl my-3 font-semibold text-white bg-gray-800 rounded-md p-2">
          Comments:
        </h3>
        {postDetails &&
          postDetails.children &&
          postDetails.children.length > 0 && (
            <div>
              {postDetails.children.map((comment: IPostDetails) => (
                <Comment key={comment?.id} comment={comment} />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default PostDetails;
