import Svg, { Path } from "react-native-svg";

const Gas = (props) => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M2.5 5a5 5 0 0 1 5-5H20c2.758 0 5 2.238 5 5v15h.625a6.875 6.875 0 0 1 6.875 6.875v2.5a1.87 1.87 0 0 0 1.875 1.875 1.87 1.87 0 0 0 1.875-1.875V17.273c-2.156-.484-3.75-2.445-3.75-4.773v-5L30 5a1.767 1.767 0 1 1 2.5-2.5l6.04 6.04A4.984 4.984 0 0 1 40 12.07v17.305A5.621 5.621 0 0 1 34.375 35a5.621 5.621 0 0 1-5.625-5.625v-2.5c0-1.727-1.398-3.195-3.125-3.195H25V35c1.383 0 2.5 1.117 2.5 2.5S26.383 40 25 40H2.5C1.12 40 0 38.883 0 37.5S1.12 35 2.5 35V5Zm5 8.75c0 .688.563 1.25 1.25 1.25h10c.688 0 1.25-.563 1.25-1.25v-7.5C20 5.56 19.437 5 18.75 5h-10c-.688 0-1.25.56-1.25 1.25v7.5Z"
      fill="#20AEE6"
    />
  </Svg>
);

export default Gas;
