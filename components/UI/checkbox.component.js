import { TouchableOpacity } from "react-native";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import styled from "styled-components/native";

const CheckboxGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = ({ onPress, children, status }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CheckboxGroup>
        <PaperCheckbox.Android status={status ? "checked" : "unchecked"} color="#20AEE6" />
        {children}
      </CheckboxGroup>
    </TouchableOpacity>
  );
};
