import { Modal as RnModal } from "react-native-paper";
import styled from "styled-components/native";

export const Modal = styled(RnModal).attrs(({ theme }) => ({
  contentContainerStyle: {
    padding: theme.spaces[2],
    alignItems: "center",
    backgroundColor: "white",
  },
}))``;
