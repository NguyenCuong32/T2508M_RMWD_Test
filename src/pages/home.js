// src/pages/Home.js
import React, { useState } from "react";
import objectsData from "../data/objects.json";
import subjectsData from "../data/subjects.json";
import Object from "../components/object";
import Subject from "../components/subject";
import HeroBanner from "../components/hero-banner";
import Locations from "../components/locations";
import "../assets/home.css";

export default function Home() {
  const [selectedAudience, setSelectedAudience] = useState(objectsData[0]);

  return (
    <main className="home-page">
      {/* HERO BANNERS */}
      <HeroBanner
        banners={[
          "/images/hero-banner/banner-01.jpg",
          "/images/hero-banner/banner-02.jpg",
          "/images/hero-banner/banner-03.png",
          "/images/hero-banner/banner-04.jpg",
          "/images/hero-banner/banner-05.jpg",
          "/images/hero-banner/banner-06.jpg",
          "/images/hero-banner/banner-07.jpg",
          "/images/hero-banner/banner-08.jpg",
        ]}
      />

      {/* SECTION: WHO SHOULD LEARN */}
      <section className="home-section">
        <h2 className="home-section-title">
          SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
        </h2>
        <div className="objects-grid">
          {objectsData.map((item) => (
            <Object
              key={item.id}
              item={item}
              selected={selectedAudience?.id === item.id}
              onSelect={() => setSelectedAudience(item)}
            />
          ))}
        </div>
        {selectedAudience && (
          <div className="object-detail-panel">
            <h3>{selectedAudience.title}</h3>
            <p>{selectedAudience.description}</p>
            {selectedAudience.highlights && (
              <ul className="object-detail-list">
                {selectedAudience.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <button
              className="object-detail-cta"
              onClick={() => window.open("https://aptech.fpt.edu.vn/", "_blank")}
            >
              Talk to an Advisor
            </button>
          </div>
        )}
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

      {/* SECTION: LOCATIONS */}
      <section className="home-section" id="locations">
        <h2 className="home-section-title">FPT Aptech Campuses</h2>
        <p className="home-section-description">
          Visit one of our campuses nationwide to experience the learning environment firsthand.
        </p>
        <Locations />
      </section>
    </main>
  );
}
