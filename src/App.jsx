import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Signin />} />
          <Route path='/feeds/:id' element={<PostDetails />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;