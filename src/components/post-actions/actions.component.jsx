import React from 'react';
import './actions.css'
import { ThumbsUp, ChatCenteredDots, Share, BookmarkSimple } from 'phosphor-react'
import { useState } from 'react';
const Actions = (props) => {
  const [Count, setlikesCount] = useState(props.like);

  const likes = () => {
    let updatedLikeArray = props.posts;
    updatedLikeArray[props.index].likesCount = Count + 1;
    setlikesCount(Count + 1);
    props.setPosts(updatedLikeArray);
    localStorage.setItem("posts", JSON.stringify(props.posts));

  }

  return (

    <div className="post-actions">
      <button onClick={likes}><ThumbsUp size={20} weight='regular' />{Count}</button>
      <button><ChatCenteredDots size={20} weight='regular' />{props.comment}</button>
      <button><Share size={20} weight='regular' /></button>
      <button><BookmarkSimple size={20} weight='regular' /></button>

    </div>
  )
}

export default Actions