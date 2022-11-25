import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  flex: 1;
  margin-vertical: ${({ theme }) => theme.spaces[3]};
  padding-horizontal: ${({ theme }) => theme.spaces[4]};
`;
