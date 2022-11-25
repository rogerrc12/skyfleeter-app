import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { AlertCard, AlertContent, CollapsibleHeader, IconWrapper } from "./alerts.styles";

const AlertItem = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AlertCard>
      <AlertContent>
        <IconWrapper color="rgba(246, 116, 116, 0.3)">
          <MaterialCommunityIcons name="alert-outline" size={35} color="red" />
        </IconWrapper>
        <Spacer variant="left" />
        <View>
          <Text variant="bold" style={{ color: "#000", fontSize: 16 }}>
            Roger Rengifo
          </Text>
          <Text>Prioridad alta</Text>
        </View>
      </AlertContent>
      <Spacer variant="top" size={2} />
      <CollapsibleHeader onPress={() => setCollapsed((prev) => !prev)}>
        <Text>Acciones</Text>
        <MaterialIcons size={30} name={collapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"} color="#828282" />
      </CollapsibleHeader>
      <Collapsible collapsed={collapsed}>
        <Text>lorem ipsum</Text>
      </Collapsible>
    </AlertCard>
  );
};

export default AlertItem;
