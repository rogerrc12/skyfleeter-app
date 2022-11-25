import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View } from "react-native";

import { Text } from "../../components/typography/text.component";
import { Container } from "../../components/utils/container.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { CheckboxWrapper, Progress, SectionWrapper } from "./components/certification.styles";

const CertificationScreen = () => {
  return (
    <SafeArea>
      <Container>
        <Spacer variant="top" size={3} />
        <SectionWrapper>
          <Text variant="subtitle">Certificación Sed ut perspiciatis</Text>
          <Spacer variant="top" />
          <Progress progress={0.33} visible color="#20AEE6" />
          <Text>33% completado</Text>
          <Spacer variant="top" size={2} />
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-blank" size={46} color="white" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-blank" size={46} color="white" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-marked" size={46} color="#20AEE6" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
        </SectionWrapper>
        <Spacer variant="top" size={3} />
        <View style={{ width: "100%", height: 1, backgroundColor: "#ccc" }} />
        <Spacer variant="top" size={3} />
        <SectionWrapper>
          <Text variant="subtitle">Certificación Sed ut perspiciatis</Text>
          <Spacer variant="top" />
          <Progress progress={0.66} visible color="#20AEE6" />
          <Text>66% completado</Text>
          <Spacer variant="top" size={2} />
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-blank" size={46} color="white" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-marked" size={46} color="#20AEE6" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <MaterialCommunityIcons name="checkbox-marked" size={46} color="#20AEE6" />
            <Spacer variant="left" />
            <View>
              <Text variant="subtitle">Lorem</Text>
              <Text>25% Numquam eius modi</Text>
            </View>
          </CheckboxWrapper>
        </SectionWrapper>
        <Spacer variant="top" size={2} />
      </Container>
    </SafeArea>
  );
};

export default CertificationScreen;
