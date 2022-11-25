import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
    {children}
  </TouchableWithoutFeedback>
);
