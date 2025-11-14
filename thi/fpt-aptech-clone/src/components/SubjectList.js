import React from 'react';
import subjectsData from '../data/subjects.json';
import SubjectItem from './SubjectItem';

function SubjectList() {
  // Lấy mô tả chung từ mục đầu tiên (vì chúng lặp lại)
  const sharedDescription = subjectsData.length > 0 ? subjectsData[0].description : "";

  return (
    <section className="section-container">
      <h2>WHAT IS THE COURSE PROGRAM?</h2>
      <div className="subjects-icon-grid">
        {subjectsData.map(item => (
          <SubjectItem
            key={item.id}
            image={item.image}
            subject={item.subject}
          />
        ))}
      </div>
      <p className="subjects-description">
        {sharedDescription}
      </p>
    </section>
  );
}

export default SubjectList;