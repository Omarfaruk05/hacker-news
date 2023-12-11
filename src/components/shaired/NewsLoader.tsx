import React from "react";

const NewsLoader = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="animate-pulse">
        {nums.map((x) => (
          <div key={x}>
            <div className="flex gap-2">
              <p className="h-4 w-4 bg-gray-200 rounded-full mt-1"></p>
              <p className="h-5 w-full bg-gray-200 rounded-lg mb-6"></p>
            </div>
            <div className="flex gap-2">
              <p className="h-4 w-4 bg-gray-200 rounded-full mt-1"></p>
              <p className="h-5 w-full bg-gray-200 rounded-lg mr-40 mb-6"></p>
            </div>
            <div className="flex gap-2">
              <p className="h-4 w-4 bg-gray-200 rounded-full mt-1"></p>
              <p className="h-5 w-full bg-gray-200 rounded-lg mr-32 mb-6"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLoader;
