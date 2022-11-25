import { PieChart as RnPieChart } from "react-native-svg-charts";

const PieChart = ({ data = [] }) => {
  const pieData = data.map((d, index) => ({
    value: d.value > 0 ? d.value * 100 : 0,
    svg: {
      fill: d.color,
    },
    key: `pie-${index}`,
  }));

  return <RnPieChart style={{ height: pieData.find((d) => d.value > 0) ? 200 : 0, width: "100%" }} data={pieData} />;
};

export default PieChart;
