import React from "react";
import "./content.css";
import like from "./assets/like.jpeg";
import mainData from './data.json';

export default function Content() {
  return (
    <>
        {mainData.posts.map((post) => 
        <>
        <div key={post["&id"]}
        style={{ borderBottom: "1px solid lightGrey" }}
        className="p-4 align-items-center"
      >
      <div className="d-flex align-items-center">
        <div className="text-start" style={{ fontWeight: "bold", fontSize: "140%" }}>
          {post.title}
        </div>
        <img
          src={like}
          alt="like"
          className="like-icon"
        ></img>
      </div>
      <div className="line text-start my-4" style={{ fontSize: "110%" }}>
        {post.description}
      </div>
      <div className="d-flex align-items-center">
        <div style={{ fontWeight: "bold", fontSize: "80%", color:"#6CB4EE" }}>{post.idea}</div>
        <div style={{ fontWeight: "bold", fontSize: "80%", marginLeft:"1%" }}>{post.writtenBy}</div>
        <div className="d-flex align-items-center" style={{marginLeft:"auto", fontSize: "70%", color:"grey"}}>
            <div className="mx-1">{post.date}</div>
            <div style={{height: "2px", width: "2px", backgroundColor: "#bbb", borderRadius: "50%"}}></div>
            <div className="mx-1">{post.readTime} Read</div>
            <div style={{height: "2px", width: "2px", backgroundColor: "#bbb", borderRadius: "50%"}}></div>
            <div className="mx-1">{post.views} Views</div>
        </div>
      </div>
    </div>
      </>
      )}
    </>
  );
}
