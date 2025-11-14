import React from "react";
import "../assets/subject.css";
export default function Subject({ item }) {
  const imgUrl = process.env.PUBLIC_URL + "/" + item.image;
  return (
    <div className="subject">
      <div className="subject-img-wrapper">
        <img src={imgUrl} alt={item.subject} />
      </div>
    </div>
  );
}
