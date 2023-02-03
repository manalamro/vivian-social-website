import React , { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './pages/feed/feed.page';
import Chat from './pages/chat/chat.page';
import Header from './components/header/header.component';
import NotFound from './pages/not found/not-found';
import ViewPost from './pages/view-post/view-post.page';
import AddPost from './pages/add-post/add-post.page';
import Login from './pages/login/login.page';

import { TMP_POSTS } from './data/temp-data';
import UserProvider from './components/providers/UserProvider.component';

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect for read data from localStorage
  useEffect(() => {
    fetchPosts();
  }, []);

  //function that bring and read the last data before add the new one so that
  // its will be clear that we add new post.

  const fetchPosts = () => {
    const postsFromStorage = JSON.parse(localStorage.posts || '[]');
    if (postsFromStorage.length === 0) {
      localStorage.posts = JSON.stringify(TMP_POSTS);
      setPosts(TMP_POSTS);
    } else {
      setPosts(postsFromStorage);
    }
  }

  return (
    <div className="App">
      {/* all the component into provider tag can access to UserContext variable */}
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path="feed" element={<Feed posts={posts} setPosts={setPosts}/>} />
            <Route path="feed/:id" element={<ViewPost posts={posts} />} />
            <Route path="chat" element={<Chat />} />
            <Route path="add" element={<AddPost onAddPost={fetchPosts} />} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
