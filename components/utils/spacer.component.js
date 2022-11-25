import styled from "styled-components/native";

const defaultStyles = (theme) => `
    padding: ${theme.spaces[1]};
`;

const top = (theme, size = 0) => `
    margin-top: ${theme.spaces[size]};
`;

const bottom = (theme, size = 0) => `
    margin-bottom: ${theme.spaces[size]};
`;

const right = (theme, size = 0) => `
    margin-right: ${theme.spaces[size]};
`;

const left = (theme, size = 0) => `
    margin-left: ${theme.spaces[size]};
`;

const vertical = (theme, size = 0) => `
    margin-vertical: ${theme.spaces[size]};
`;

const horizontal = (theme, size = 0) => `
    margin-horizontal: ${theme.spaces[size]};
`;

const variants = {
  top,
  bottom,
  right,
  left,
  vertical,
  horizontal,
};

export const Spacer = styled.View`
  ${({ theme }) => defaultStyles(theme)}
  ${({ variant, theme, size }) => variants[variant](theme, size)}
`;

Spacer.defaultProps = {
  variant: "top",
  size: 1,
};
