import "./index.css";
import { challenges } from "@/data/index";
import Image from "next/image";

export default function ChallangesSection() {
  return (
    <section className="challange-section">
      <div className="left-section">
        <h1 className="main-heading">Challanges In Job Hunting</h1>
        <Image src="/assets/hero-bg.png" width={100} height={100} alt="hero" />
        <button>Learn More</button>
      </div>
      <div className="right-text-section">
        <div className="challange-details-section">
          {challenges.map((item) => (
            <div className="details-card" key={item.id}>
              <h1 className="details-heading">{item.c_heading}</h1>
              <p className="details-sub-headding">{item.c_content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
