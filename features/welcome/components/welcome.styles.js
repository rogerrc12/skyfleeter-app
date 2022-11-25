import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const OptionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const OptionCard = styled.TouchableOpacity`
  margin-vertical: ${({ theme }) => theme.spaces[2]};
  margin-right: ${({ theme }) => theme.spaces[3]};
  background-color: #fff;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spaces[1]};
  width: 107px;
  height: 107px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;
