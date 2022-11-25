import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Dimensions, Modal, Platform, Pressable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { Input } from "./input.component";

const FormGroup = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spaces[3]};
`;

const PickerIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "keyboard-arrow-down",
  size: 25,
  color: theme.colors.primary,
}))`
  position: absolute;
  right: 10px;
  top: ${({ label }) => (label ? "28px" : "8px")};
  z-index: 10;
  padding: 10px;
`;

const ModalContent = styled.View`
  height: ${Dimensions.get("screen").height / 3}px;
  margin-top: auto;
  background-color: #ddd;
`;

const InputAndroid = styled.View`
  background-color: #fff;
  height: 48px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces[1]};
  justify-content: center;
  border-width: 1px;
  border-color: #bbb;
`;

export const PickerSelect = ({ label, placeholder, value, onChange, name, options, disabled, errorMessage, isError }) => {
  const [pickerShown, setPickerShown] = useState(false);

  return (
    <>
      <FormGroup>
        {Platform.OS === "android" ? (
          <>
            {label && <Text variant="bold">{label}</Text>}
            <InputAndroid>
              <Picker style={{ fontFamily: "roboto-regular", height: 55, width: "100%" }} selectedValue={value} onValueChange={(value) => onChange(name, value)}>
                <Picker.Item label={placeholder} value="" enabled={false} color="#888" />
                {options.map((o) => (
                  <Picker.Item key={o.value} label={o.label} value={o.value} />
                ))}
              </Picker>
            </InputAndroid>
            {errorMessage && (
              <Text variant="caption" style={{ color: "red", position: "absolute", top: 0 }}>
                {error}
              </Text>
            )}
          </>
        ) : (
          <>
            <Pressable onPress={disabled || Platform.OS === "android" ? null : () => setPickerShown(true)}>
              <View pointerEvents="none">
                <Input isError={isError} errorMessage={errorMessage} placeholder={placeholder} label={label} value={!value ? "" : options.find((o) => o.value === value)?.label} />
              </View>
              <PickerIcon label={label} onPress={disabled || Platform.OS === "android" ? null : () => setPickerShown(true)} />
            </Pressable>
          </>
        )}
      </FormGroup>
      <Modal
        transparent
        animationType="slide"
        visible={pickerShown}
        onRequestClose={() => {
          setPickerShown(false);
        }}
      >
        <TouchableOpacity activeOpacity={1} onPressOut={() => setPickerShown(false)} style={{ flex: 1 }}>
          <TouchableWithoutFeedback>
            <ModalContent>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#EEE",
                  borderWidth: 1,
                  borderColor: "#DDD",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableWithoutFeedback onPress={() => setPickerShown(false)}>
                  <Text variant="subtitle" style={{ color: "#006ee6" }}>
                    Cerrar
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <Picker selectedValue={value} onValueChange={(value) => (!value ? () => {} : onChange(name, value))}>
                <Picker.Item label={placeholder} value="" enabled={false} style={{ opacity: 0.75 }} />
                {options.map((o) => (
                  <Picker.Item key={o.value} label={o.label} value={o.value} />
                ))}
              </Picker>
            </ModalContent>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
