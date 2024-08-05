import React from "react";
import Image from "next/image";
import "./index.css";

export default function WhoWeServeSection() {
  return (
    <section className="who-we-serve-section">
      <div className="left-img-section">
        <Image
          src="/assets/hero-bg.png"
          alt="Service Image"
          width={500}
          height={500}
          className="left-image"
        />
        <div className="new-d"></div>
      </div>
      <div className="right-text-section">
        <h1 className="main-heading">Who We Serve</h1>
        <p className="sub-heading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit optio alias dolorum, temporibus ullam sit?
        </p>
        <div className="serve-details-section">
          <div className="details-card">
            <h1 className="details-heading">Heading</h1>
            <p className="details-sub-headding">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="details-card">
            <h1 className="details-heading">Heading</h1>
            <p className="details-sub-headding">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="details-card">
            <h1 className="details-heading">Heading</h1>
            <p className="details-sub-headding">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <button>Learn More</button>
      </div>
    </section>
  );
}
