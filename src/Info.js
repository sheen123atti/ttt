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
            <img src={star} alt='star' className='icon' style={{marginLeft:"0px"}}></img>
            <div className=''>125</div>
            <img src={like} alt='like' className='icon' ></img>
            <div className=''>12</div>
            <img src={view} alt='view' className='icon' ></img>
            <div className=''>57.8K</div>
            <img src={heart} alt='heart' className='icon' ></img>
            <div className=''>26.0K</div>
        </div>
    </div>
  )
}
