import React from "react";
import "../assets/object.css";
export default function Object({ item, selected = false, onSelect }) {
  const imgUrl = process.env.PUBLIC_URL + "/" + item.image;
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.();
    }
  };
  return (
    <article
      className={selected ? "object selected" : "object"}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <img src={imgUrl} alt={item.title} className="object-img" />
      <div className="object-body">
        <h3 className="object-title">{item.title}</h3>
        <p className="object-text">{item.description}</p>
      </div>
    </article>
  );
}
