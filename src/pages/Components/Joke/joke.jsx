import { useState } from "react";

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {

  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={userAvatar}
            alt={userName}
          />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">
          {text}
        </p>
      </div>

      <div className="joke__likes">
        <button className="btn-like btn-like--up">
          onClick={() => setLikeCount(likeCount + 1)}
        </button>
        <span className="likes-count likes-count--up">{likeCount}
        </span>
        <button className="btn-like btn-like--down">
          onClick={() => setDislikeCount(dislikeCount + 1)}
        </button>
        <span className="likes-count likes-count--down">{dislikeCount}
          </span>
      </div>
    </div>
  );
};
