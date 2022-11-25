import { Text as PaperText } from "react-native-paper";
import styled from "styled-components/native";

const defaultStyles = (theme) => `
  line-height: ${theme.lineHeights.copy};
  color: ${theme.colors.text};
  flex-wrap: wrap;
`;

const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const link = (theme) => `
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.primary};
  text-decoration-line: underline;
  text-decoration-color: ${theme.colors.primary};
`;

const bold = (theme) => `
  font-family: ${theme.fonts.medium};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
`;

const title = (theme) => `
font-size: ${theme.fontSizes.large};
font-family: ${theme.fonts.bold};
line-height: ${theme.lineHeights.title};
margin-vertical: ${theme.spaces[1]};
`;

const subtitle = (theme) => `
font-size: ${theme.fontSizes.subtitle};
font-family: ${theme.fonts.semibold};
line-height: ${theme.lineHeights.title};
`;

const variants = {
  body,
  title,
  link,
  bold,
  subtitle,
  caption,
};

export const Text = styled(PaperText).attrs({
  allowFontScaling: false,
})`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
