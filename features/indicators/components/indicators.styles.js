import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const InfoCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding-horizontal: ${({ theme }) => theme.spaces[2]};
  padding-vertical: ${({ theme }) => theme.spaces[5]};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Price = styled(Text)`
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const BarIndicator = styled.View`
  width: 85%;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;
