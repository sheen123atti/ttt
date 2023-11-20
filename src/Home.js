import React from 'react';
import bg from './assets/bg.jpeg';
import diamond from './assets/diamond.jpeg';
import tick from './assets/tick.jpeg';
import './home.css';

export default function Home() {
  return (
    <div className='position-relative'>
        <img src={bg} alt='home' width="100%" height="auto"></img>
        <div className='holder'>
        <div className='pp'></div>
        </div>
        <div className='d-flex align-items-center position-absolute' style={{top:"106%", left:"45%"}}>
          <div>Anuj Ghosale</div>
          <img style={{marginLeft:"8px", marginRight:"2px"}} src={diamond} alt='diamond' width="6%" height="6%"></img>
          <img style={{marginLeft:"2px", marginRight:"2px"}} src={tick} alt='tick' width="6%" height="6%"></img>

        </div>
        <div className='position-absolute' style={{borderRadius:"4px", width:"60px", border:"2px solid grey", top:"134%", left:"45%"}}>6482</div>
        <div className='position-absolute' style={{fontSize:"14px", top:"157%", left:"45%"}}>Followers</div>

        <div className='position-absolute' style={{borderRadius:"4px", width:"60px", border:"2px solid grey", top:"134%", left:"65%"}}>245</div>
        <div className='position-absolute' style={{fontSize:"14px", top:"157%", left:"65%"}}>Following</div>
    </div>
  )
}
