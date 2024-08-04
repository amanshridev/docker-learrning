import Image from "next/image";
import { homeHeaderData } from "@/data";
import "./index.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {homeHeaderData.map((item) => (
        <div key={item.id}>
          <h1>{item.main_heading}</h1>
          <p>{item.sub_heading}</p>
        </div>
      ))}
      <div>
        <Image src="" width={500} height={500} alt="hero" />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
