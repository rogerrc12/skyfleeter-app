import { View } from "react-native";
import { Fade, Placeholder, PlaceholderLine } from "rn-placeholder";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";

const LoaderScreen = () => {
  return (
    <SafeArea>
      <Container>
        <Placeholder Animation={Fade}>
          <PlaceholderLine width={80} />
          <PlaceholderLine height={40} />
          <PlaceholderLine height={40} />
          <Spacer variant="top" />
          <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
            <PlaceholderLine width={50} />
            <PlaceholderLine width={90} height={200} style={{ borderRadius: 6 }} />
          </View>
        </Placeholder>
      </Container>
    </SafeArea>
  );
};

export default LoaderScreen;
