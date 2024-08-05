import React from "react";
import { VictoryPie } from "victory";

const PieChart = () => {
  return (
    <VictoryPie
      data={[
        { x: 1, y: 2, label: "User Signup" },
        { x: 2, y: 3, label: "User Login" },
        { x: 3, y: 5, label: "User Visited" },
      ]}
    />
  );
};

export default PieChart;
