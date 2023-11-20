import React from 'react'
import Content from './Content';
import mainData from './data.json';

export default function Posts() {
    
  return (
    <div className='my-4'>
        <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link text-primary active border-bottom-0" href="/">{mainData.posts.length} Posts</a>
            </li>
        </ul>
        <Content/>
    </div>
  )
}
