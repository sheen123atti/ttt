import React from 'react';
import './info.css';
import star from './assets/star.jpeg';
import like from './assets/like.jpeg';
import view from './assets/view.jpeg';
import heart from './assets/heart.jpeg';

export default function Info() {
  return (
    <div className='cont d-flex flex-column text-start'>
        <div style={{marginLeft:"10%"}}>Co-founder & CEO at Terribly Tiny Tales</div>
        <a href='http://www.instagram.com/anujgosalia' style={{marginLeft:"10%", marginTop:"1%", textDecoration:"none"}}>http://www.instagram.com/anujgosalia</a>
        <div className='d-flex align-items-center' style={{marginLeft:"10%", marginTop:"1%"}}>
            <img src={star} alt='star' width="6%" height="6%"></img>
            <div className=''>125</div>
            <img src={like} alt='like' style={{marginLeft:"10px"}} width="6%" height="6%"></img>
            <div className=''>12</div>
            <img src={view} alt='view' style={{marginLeft:"10px"}} width="6%" height="6%"></img>
            <div className=''>57.8K</div>
            <img src={heart} alt='heart' style={{marginLeft:"10px"}} width="6%" height="6%"></img>
            <div className=''>26.0K</div>
        </div>
    </div>
  )
}
