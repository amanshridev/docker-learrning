'use client'
import { useState } from "react";
import Image from "next/image";
import { homeHeaderData, dataChart } from "@/data";
import "./index.css";
import { CategoryScale } from "chart.js";
import { BarChart } from "../BarChart";

Chart.register(CategoryScale);

export default function HeroSection() {
  const [chartData, setChartData] = useState({
    labels: dataChart.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: dataChart.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

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
        <div style="width: 800px;">
          <BarChart chartData={chartData} />
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
