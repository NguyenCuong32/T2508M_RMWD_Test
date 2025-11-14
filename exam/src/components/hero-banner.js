import React, { useState, useEffect } from "react";
import "../assets/hero-banner.css";
export default function HeroBanner({ banners, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!banners || banners.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, interval);
    return () => clearInterval(timer);
  }, [banners, interval]);
  if (!banners || banners.length === 0) return null;
  return (
    <section className="hero-banner">
      <div className="hero-banner-inner">
       
        <div
          className="hero-banner-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((src, index) => (
            <div className="hero-banner-slide" key={index}>
              <img
                src={src}
                alt={`hero-banner-${index}`}
                className="hero-banner-img"
              />
            </div>
          ))}
        </div>

     
        <div className="hero-banner-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={
                index === current ? "hero-banner-dot active" : "hero-banner-dot"
              }
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
