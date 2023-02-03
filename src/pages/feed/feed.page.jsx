import React, { useState, useEffect, useContext } from 'react';
import Post from '../../components/post/post.component';
import './feed.css';
import { useSearchParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/providers/UserProvider.component'
const Feed = (props) => {
  const [filterdPost, setfilterdPost] = useState(props.posts);
  const [params] = useSearchParams();
  const [LikeParams, setLikeParams] = useSearchParams();
  const [CommintParams, setCommintParams] = useSearchParams();

  const navigate = useNavigate();
  const { user } = useContext(UserContext)
  const queryFromUrl = params.get('query') || '';

  const CommintsFromUrl = CommintParams.get('Comments')|| 0;
  const likesFromUrl = LikeParams.get('Likes')|| 0;
  
  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }

  }, [user]);

  useEffect(() => {
    const searchquery = queryFromUrl.toLowerCase();
    const filterdPost = props.posts.filter((post => {
      let isMatching = false;
      isMatching = (
        post.body.toLowerCase().includes(searchquery) ||
        post.author.toLowerCase().includes(searchquery)
      );
      return isMatching;
    }));

    setfilterdPost(filterdPost);
  }, [queryFromUrl, props.posts]);



  useEffect(() => {
    const filterdPost = props.posts.filter((post => {
      let isMatching = false;
      isMatching = (
        post.likesCount > likesFromUrl
      );
      return isMatching;
    }));

    setfilterdPost(filterdPost);
  }, [likesFromUrl, props.posts]);


  useEffect(() => {
    const filterdPost = props.posts.filter((post => {
      let isMatching = false;
      isMatching = (
        post.commentsCount > CommintsFromUrl
      );
      return isMatching;
    }));

    setfilterdPost(filterdPost);
  }, [CommintsFromUrl, props.posts]);


  const handelSearch = (e) => {
    const newparam = new URLSearchParams(LikeParams);
    if (e.target.value > 0) {
      newparam.set('Likes', e.target.value);
    }
    else {
      newparam.set('Likes',0);
      newparam.delete('Likes');
    }
    setLikeParams(newparam);
  }

  const handelCommentSearch = (e) => {
    const newparam = new URLSearchParams(CommintParams);
    if (e.target.value > 0) {
      newparam.set('Comments', e.target.value);
    }
    else {
      newparam.delete('Comments');
    }
    setCommintParams(newparam);

  }

  return (

    <div className="feed">
      <div className="column">
        <div className="slider">
          <h4>likes filter</h4>
          <input name="inputRange"
            type="range"
            min={0}
            max={150}
            value={likesFromUrl}
            onChange={handelSearch} />
          {
            LikeParams.get('Likes') > 0 ?
              <p>likes:{likesFromUrl}</p>
              : <div />
          }
        </div>

        <div className="slider">
          <h4>comments filter</h4>
          <input name="inputRange"
            type="range"
            min={0}
            max={150}
            value={CommintsFromUrl}
            onChange={handelCommentSearch} />

          {
            CommintParams.get('Comments') > 0 ?
              <p>Comments:{CommintsFromUrl}</p>
              : <div />
          }
        </div>

      </div>

      <div className="mainContent">

        {

          filterdPost.map((item, index) =>
            <Post key={item.postId} posts={filterdPost} post={item}
              setPosts={props.setPosts} index={index} />)
        }
      </div>

    </div>
  )
}

export default Feed
