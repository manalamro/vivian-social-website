import React , { useEffect, useContext } from 'react';
import './add-post.css';
import { useNavigate } from 'react-router-dom';
import NewPost from '../../components/new-item/new-item';
import { UserContext } from '../../components/providers/UserProvider.component';

const AddPost = (props) => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);

useEffect(()=>{
if(user === null){
  navigate('/login');
}

},[user]);

  //function to handel the added post.
  const handleSubmit = (e) => {
    e.preventDefault();
    //to read and get the enterd data.
    //store the value in variable by get the value of spicific item.
    const body = e.target.body.value;
    const image = e.target.imgURL.value;
    const newPost = {

      postId: Date.now(),
      author: "Manal Amro",
      postTime: new Date().toDateString() + " " + new Date().toLocaleTimeString(),
      body: body,
      image: image,
      likesCount: 0,
      commentsCount: 0

    };

    //before add the new value we read the localStoage.
    const postsFromStorage = JSON.parse(localStorage.posts || '[]');
    //add the new value and the previous array into new array.
    const newPosts = [newPost, ...postsFromStorage];
    //add the new array into the localStorage.
    localStorage.posts = JSON.stringify(newPosts);
    props.onAddPost();
    alert('Your post was added successfully!');
    navigate('/feed');
  }

  return (
    user !== null
      ? (
        <div className="add-post">
          <h2>what's in your mind? </h2>
          <NewPost handleSubmit={handleSubmit} />
        </div>
      )
      : null
  )
}

export default AddPost;