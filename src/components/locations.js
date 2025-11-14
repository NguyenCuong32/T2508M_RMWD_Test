import React from "react";
import locationsData from "../data/locations.json";
import "../assets/locations.css";

export default function Locations() {
  return (
    <div className="locations-grid">
      <div className="locations-list">
        {locationsData.map((location) => (
          <article key={location.id} className="location-card">
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>
              Hotline:{" "}
              <a href={`tel:${location.phone.replace(/\s+/g, "")}`}>
                {location.phone}
              </a>
            </p>
            <a
              className="location-link"
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Map
            </a>
          </article>
        ))}
      </div>
      <div className="locations-map">
        <iframe
          title="FPT Aptech Hanoi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.572706955187!2d105.7451197760372!3d21.009132788569675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c07b44efdf%3A0x561192d08d6579b3!2sFPT%20Aptech!5e0!3m2!1sen!2s!4v1731516900000!5m2!1sen!2s"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
