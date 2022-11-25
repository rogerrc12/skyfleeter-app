import React from "react";
import { Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

const KeyboardAware = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    width: Dimensions.get("window").width,
    flexGrow: 1,
    paddingBottom: 15,
    alignItems: "center",
  },
})``;

export const KeyboardScrollAware = ({ children }) => {
  return <KeyboardAware>{children}</KeyboardAware>;
};
