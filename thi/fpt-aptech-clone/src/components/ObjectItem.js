import React from 'react';

function ObjectItem({ image, title, description }) {
  return (
    <div className="object-card">
      <img src={image} alt={title} className="object-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ObjectItem;