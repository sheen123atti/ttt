import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Info from './Info';
import Posts from './Posts';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Info />
      <Posts />
    </div>
  )
}
