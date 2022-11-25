import { configureFonts, DefaultTheme } from "react-native-paper";
import { colors } from "./colors";
import { fontFamilies, fonts, fontSizes } from "./fonts";
import { lineHeights, spaces } from "./spacings";

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  fonts: configureFonts(fonts),
  colors,
};

export const styledTheme = {
  colors,
  fonts: fontFamilies,
  fontSizes,
  lineHeights,
  spaces,
};
