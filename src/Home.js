import React from 'react';
import bg from './assets/bg.jpeg';
import diamond from './assets/diamond.jpeg';
import tick from './assets/tick.jpeg';
import './home.css';

export default function Home() {
  return (
    <div className='position-relative'>
        <img src={bg} alt='home' width="100%" height="auto" style={{borderBottom:"2px solid grey"}}></img>
        <div className='holder'>
        <div className='pp'></div>
        </div>
        <div className='d-flex align-items-center position-absolute' style={{top:"106%", left:"45%"}}>
          <div className='pName'>Anuj Ghosale</div>
          <img style={{marginLeft:"8px", marginRight:"2px"}} src={diamond} alt='diamond' width="6%" height="6%"></img>
          <img style={{marginLeft:"2px", marginRight:"2px"}} src={tick} alt='tick' width="6%" height="6%"></img>

        </div>
        <div className='position-absolute follow-number'>6482</div>
        <div className='position-absolute follow'>Followers</div>

        <div className='position-absolute following-number'>245</div>
        <div className='position-absolute following'>Following</div>
    </div>
  )
}
