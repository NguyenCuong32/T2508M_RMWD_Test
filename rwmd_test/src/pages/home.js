// src/pages/Home.js
import React from "react";
import objectsData from "../data/objects.json";
import subjectsData from "../data/subjects.json";
import Object from "../components/object";
import Subject from "../components/subject";

import "../assets/home.css";

export default function Home() {
  return (
    <main className="home-page">
      {/* SECTION: BANNER*/}
      <section className="home-banner">
        <div className="banner-content"></div>
      </section>
      {/* SECTION: WHO SHOULD LEARN */}
      <section className="home-section">
        <h2 className="home-section-title">
          SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
        </h2>
        <div className="objects-grid">
          {objectsData.map((item) => (
            <Object key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* SECTION: COURSE PROGRAM */}
      <section className="home-section">
        <h2 className="home-section-title">WHAT IS THE COURSE PROGRAM?</h2>

        <div className="subjects-row">
          {subjectsData.map((item) => (
            <Subject key={item.id} item={item} />
          ))}
        </div>

        <p className="subjects-description">{subjectsData[0].description}</p>
      </section>
    </main>
  );
}
