import { useCallback, useState } from "react";

const Comment = ({ item, handleReplyToComment, handleLikeComment, showReply = true }) => {
  const [liked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);

  const handleLiked = useCallback((id) => {
    setIsLiked(!liked);

    const updatedLikeValue = !liked ? likeCount + 1 : likeCount - 1;

    setLikeCount(updatedLikeValue);
    handleLikeComment(id, updatedLikeValue);
  }, [liked, likeCount, handleLikeComment]);

  return (
    <div className="flex flex-row justify-between">
      <div className="commentContentContainer">
        <h2 className="font-bold text-sm">{item.username}</h2>
        <p className="mt-4 text-lg">{item.text}</p>

        <div className="replyButtonContainer mt-2 flex flex-row text-center">
          <p className="mr-6 font-semibold text-sm text-slate-300">{`${likeCount} Likes`}</p>
          {showReply && (
            <button onClick={() => {
              handleReplyToComment(item.id);
            }} className="font-semibold text-sm text-slate-300">
              Reply
            </button>
          )}
        </div>
      </div>
      <div className="likeContainer">
        <button
          onClick={() => {
            handleLiked(item.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path
              d="M20.808 11.079C19.829 16.132 12 20.5 12 20.5s-7.829-4.368-8.808-9.421C2.227 6.1 5.066 3.5 8 3.5a4.444 4.444 0 0 1 4 2 4.444 4.444 0 0 1 4-2c2.934 0 5.773 2.6 4.808 7.579z"
              fill={liked ? "red" : "none"}
              stroke={liked ? "none" : "currentColor"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Comment;
