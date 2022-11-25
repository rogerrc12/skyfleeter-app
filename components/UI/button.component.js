import { Button as PaperButton } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyles = (theme) => `
    margin-bottom: ${theme.spaces[2]};
    border-radius: 0;
    elevation: 0;
`;

const defaultAttrs = (theme) => ({
  mode: "contained",
  contentStyle: {
    width: "100%",
    height: 48,
  },
  labelStyle: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: theme.fonts.semibold,
  },
});

const primary = (theme) => ({
  color: theme.colors.primary,
});

const variants = {
  primary,
};

export const Button = styled(PaperButton).attrs(({ variant, theme }) => ({
  ...defaultAttrs(theme),
  ...variants[variant](theme),
}))`
  ${({ theme }) => defaultStyles(theme)}
`;

Button.defaultProps = {
  variant: "primary",
  uppercase: false,
};
