/* eslint-disable @next/next/no-img-element */
const Comment = ({ comment }: any) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src="https://thumbs.dreamstime.com/b/male-avatar-profile-picture-vector-illustations-91554015.jpg"
          alt="User Avatar"
        />
      </div>
      <div className="ml-2">
        <div className="bg-gray-100 p-4  rounded-lg  mb-4 w-[400px] lg:w-[700px]">
          <p className="font-bold">{comment.author}</p>
          <p className="overflow-hidden">{comment.text}</p>
        </div>
        {comment.children && comment.children.length > 0 && (
          <div className="mt-2">
            {comment.children.map((child: any) => (
              <Comment key={child.id} comment={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
