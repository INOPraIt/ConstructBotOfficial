import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Layout from './assets/components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={
        <Layout>
          <Home/>
        </Layout>} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/exit'} element={<Register />} />
    </Routes>
  )
}
