import styled from "styled-components/native";
import { Card } from "../../../components/UI/card.component";

export const AlertsWrapper = styled.View`
  flex: 1;
`;

export const AlertCard = styled(Card)`
  padding-left: ${({ theme }) => theme.spaces[4]};
  padding-right: ${({ theme }) => theme.spaces[4]};
  min-height: 150px;
  justify-content: center;
`;

export const AlertContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  padding: ${({ theme }) => theme.spaces[2]};
  width: 50px;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export const CollapsibleHeader = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
