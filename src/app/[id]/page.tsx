import PostDetails from "@/components/ui/PostDetails";
import React from "react";

const PostDetailsPage = ({ params }: any) => {
  const { id } = params;

  return (
    <div className="max-w-7xl mx-auto">
      <PostDetails id={id} />
    </div>
  );
};

export default PostDetailsPage;
