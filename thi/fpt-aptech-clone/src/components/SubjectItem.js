import React from 'react';

function SubjectItem({ image, subject }) {
  return (
    <div className="subject-icon">
      <img src={image} alt={subject} />
      <h4>{subject}</h4>
    </div>
  );
}

export default SubjectItem;