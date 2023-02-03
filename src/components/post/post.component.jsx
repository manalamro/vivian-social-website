import React from 'react';
import Author from '../author/author.component';
import Actions from '../post-actions/actions.component';
import './post.css';

const Post = (props) => {
  return (
    <div className="post">
      <Author author={props.post.author}
        postTime={props.post.postTime}
        postId={props.post.postId} />
      <div className="body">
        <p>
          {props.post.body}
        </p>
        <img src={props.post.image} alt="nature" />
      </div>
      <Actions 
        post={props.post}
        like={props.post.likesCount}
        comment={props.post.commentsCount}
        index={props.index}
        posts={props.posts}
        setPosts={props.setPosts} />
    </div>
  )
}

export default Post;