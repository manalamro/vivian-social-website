import React from 'react';
import './author.css';
import userImg from '../../assets/user.png';
import { Link } from 'react-router-dom';
const Author = (props) => {
  return (
    <div className="author">
      <img src={userImg} width={50} height={50} alt="Placeholder User Image" />
      <div className="info">
        <h2>{props.author}</h2>
        <span>
          <Link to={`/feed/${props.postId}`}>
            {props.postTime}
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Author



