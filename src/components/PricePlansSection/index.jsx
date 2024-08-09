"use client";
import { useState } from "react";
import "./index.css";
import { plans } from "@/data/index";

export default function PricePlanSection() {
  const [popular, setPopular] = useState("Popular");
  return (
    <>
      <section className="price-section">
        <h1 className="price-heading">Pick Your Plan</h1>
        <div className="price-plans">
          {plans.map((item) => (
            <div
              className={item.type === popular ? "popular-plan" : "price-card"}
              key={item.id}
            >
              {item.type === popular ? (
                <div class="ribbon">
                  <span class="ribbon3">{popular}</span>
                </div>
              ) : null}
              <h1 className="pack-title">{item.title}</h1>
              <ul className="pack-details">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
