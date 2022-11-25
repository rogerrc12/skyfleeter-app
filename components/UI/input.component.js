import { HelperText, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const StyledInput = styled(TextInput).attrs(({ error, theme }) => ({
  mode: "outlined",
  theme: {
    roundness: 0,
    colors: {
      placeholder: error ? theme.colors.error : "#bbb",
      background: "white",
    },
  },
}))`
  height: 45px;
`;

const FormGroup = styled.View`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces[1]};
`;

export const Input = ({ onChange, label, placeholder, error, ...rest }) => {
  return (
    <FormGroup>
      {label && <Text variant="bold">{label}</Text>}
      <StyledInput placeholder={placeholder} onChangeText={onChange} error={error} {...rest} />
      <HelperText style={{ paddingBottom: 0 }} type="error" visible={error}>
        {error}
      </HelperText>
    </FormGroup>
  );
};
