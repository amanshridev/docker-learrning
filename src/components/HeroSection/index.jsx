"use client";
import Image from "next/image";
import { homeHeaderData } from "@/data";
import "./index.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {homeHeaderData.map((item) => (
        <div key={item.id} className="left-section">
          <p className="top-sub-heading">
            100+ Happy
            <br />
            <span className="span-text">Customer</span>
          </p>
          <h1 className="main-heading">{item.main_heading}</h1>
          <p className="sub-heading">{item.sub_heading}</p>
          <div>
            <button>Contact</button>
            <button>View Details</button>
          </div>
        </div>
      ))}
      <div className="right-section">
        <div className="card">
          <div className="card-left">
            <Image src="/assets/hero-bg.png" width={100} height={100} alt="hero" />
          </div>
          <div className="card-left">
            <BarChart />
          </div>
        </div>
        <div className="card">
          <div className="card-with-bg"></div>
          <div className="card-right">
            <PieChart />
          </div>
          <div className="card-right">
          <Image src="/assets/hero-bg.png" width={100} height={100} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
