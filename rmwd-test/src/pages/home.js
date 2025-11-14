// src/pages/Home.js
import React from "react";
import objectsData from "../data/objects.json";
import subjectsData from "../data/subjects.json";
import Object from "../components/object";
import Subject from "../components/subject";
import HeroBanner from "../components/hero-banner";
import "../assets/home.css";

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO BANNERS */}
      <HeroBanner
        banners={[
          process.env.PUBLIC_URL + "/images/hero-banner/banner-01.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-02.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-03.png",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-04.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-05.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-06.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-07.jpg",
          process.env.PUBLIC_URL + "/images/hero-banner/banner-08.jpg",
        ]}
      />

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
