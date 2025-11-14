import React from 'react';
import objectsData from '../data/objects.json';
import ObjectItem from './ObjectItem';

function ObjectList() {
  return (
    <section className="section-container">
      <h2>SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?</h2>
      <div className="objects-grid">
        {objectsData.map(item => (
          <ObjectItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ObjectList;