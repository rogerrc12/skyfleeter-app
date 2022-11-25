import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Logo from "../../assets/images/logo";
import { Text } from "../../components/typography/text.component";

const Header = styled.View`
  background-color: #fff;
  width: ${Dimensions.get("window").width}px;
  padding-top: 30px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const defaultOptions = {
  headerStyle: {
    height: 100,
    backgroundColor: "#F2F2F2",
  },
  headerBackVisible: false,
  headerBackTitleVisible: false,
  headerShadowVisible: false,
};

export const HeaderLogo = ({ width }) => <Logo width={width} />;

export const HeaderTitle = ({ title }) => (
  <Text variant="title" numberOfLines={1} style={{ fontSize: 18 }}>
    {title}
  </Text>
);

export const headerBackLeft = (navigation) => (
  <View style={{ paddingBottom: 0, marginHorizontal: 5 }}>
    <TouchableOpacity onPress={navigation.goBack}>
      <MaterialIcons color="#828282" name={Platform.OS === "android" ? "arrow-back" : "arrow-back-ios"} size={23} />
    </TouchableOpacity>
  </View>
);

export const HeaderLogout = ({ onLogout }) => (
  <TouchableOpacity style={{ paddingBottom: 0, marginRight: 8, flexDirection: "row", alignItems: "center" }} onPress={onLogout}>
    <Text variant="caption">salir</Text>
    <MaterialIcons color="#828282" name="logout" size={23} style={{ marginLeft: 7 }} />
  </TouchableOpacity>
);

export const HomeHeader = ({ handleLogout, navigation }) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Header style={{ height: headerHeight }}>
      <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
        <HeaderLogout onLogout={handleLogout} />
        <View style={{ marginRight: 20 }}>
          <Logo width={120} />
        </View>
        <MaterialCommunityIcons color="#828282" size={23} name="bell-outline" onPress={() => navigation.navigate("Alerts")} />
      </View>
    </Header>
  );
};
