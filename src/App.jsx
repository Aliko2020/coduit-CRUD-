import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/feeds/:id' element={<PostDetails />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;