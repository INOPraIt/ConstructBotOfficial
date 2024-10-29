import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

export default () => {
  return (
      
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/messages" element={<Chat />}/>
      </Routes>
    </div>
  )
}
