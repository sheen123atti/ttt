import React from 'react';
import logo from './assets/logo.png';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='bg-black text-white px-3 py-4'>
        <div className='d-flex overflow-auto align-items-center'>
            <img src={logo} alt='ttt' className="ttt"></img>
            <div className='bg-warning mx-1' style={{width:2.5, height:30}}></div>
            <div className='mx-1' style={{letterSpacing:"2px", fontWeight:"bold"}}>STORIES</div>
            <div style={{marginLeft:"auto"}}>
                <div className='btn btn-warning'>Courses</div>
            </div>
        </div>
    </div>
  )
}
