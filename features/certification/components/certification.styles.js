import { Dimensions } from "react-native";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";

export const SectionWrapper = styled.View`
  width: 100%;
  text-align: center;
  align-items: center;
`;

export const ProgressBarWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Progress = styled(ProgressBar)`
  height: 25px;
  width: ${Dimensions.get("window").width / 1.1}px;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 5px;
`;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
`;

export const Checkbox = styled.View`
  width: 35px;
  height: 35px;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : "#fff")};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
