const PostCards = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <p>image</p>
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default PostCards;
