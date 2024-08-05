import React from "react";
import { VictoryPie } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const PieChart = () => {
  return (
    <VictoryPie
      data={[
        { x: 1, y: 2, label: "one" },
        { x: 2, y: 3, label: "two" },
        { x: 3, y: 5, label: "three" },
      ]}
    />
  );
};

export default PieChart;
