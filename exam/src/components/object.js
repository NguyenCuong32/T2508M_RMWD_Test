import React from "react";
import "../assets/object.css";
export default function Object({ item }) {
  const imgUrl = process.env.PUBLIC_URL + "/" + item.image;
  return (
    <article className="object">
      <img src={imgUrl} alt={item.title} className="object-img" />
      <div className="object-body">
        <h3 className="object-title">{item.title}</h3>
        <p className="object-text">{item.description}</p>
      </div>
    </article>
  );
}
