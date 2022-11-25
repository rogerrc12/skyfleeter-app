import Svg, { Circle } from "react-native-svg";

const Tires = (props) => (
  <Svg width={39} height={39} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={19.5} cy={19.5} r={12.5} stroke="#20AEE6" strokeWidth={14} />
  </Svg>
);

export default Tires;
