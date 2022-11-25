import { BarChart } from "react-native-svg-charts";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

const ChartWrapper = styled.View`
  height: 150px;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.spaces[3]};
  position: relative;
`;

const ProgressLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #aaa;
`;

const ProgressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const ProgressInfoWrapper = styled.View`
  position: absolute;
  top: 25%;
`;

const Info = styled(Text).attrs({
  variant: "title",
})`
  font-size: 17px;
`;

const ProgressChart = ({ data = [0], range, indicator, progressInfo }) => {
  const percentageValue = [data[0] > 100 ? data[0] / range : data[0]];

  return (
    <ChartWrapper>
      <BarChart
        style={{ flex: 0.8 }}
        horizontal={true}
        spacingInner={0.1}
        gridMin={0}
        gridMax={100}
        data={percentageValue}
        svg={{ fill: "rgb(32, 174, 230)" }}
        contentInset={{ top: 30, bottom: 20 }}
        numberOfTicks={3}
      />
      <ProgressInfoWrapper style={{ left: percentageValue[0] >= 30 ? `${percentageValue[0] - percentageValue[0] / 2}%` : "50%" }}>
        <Info style={{ color: percentageValue[0] >= 30 ? "#fff" : "#aaa" }}>
          {!isNaN(data[0]) ? data[0].toFixed(1) : 0}
          {indicator}
        </Info>
      </ProgressInfoWrapper>
      <ProgressLine />
      <ProgressWrapper>{progressInfo}</ProgressWrapper>
    </ChartWrapper>
  );
};

export default ProgressChart;
