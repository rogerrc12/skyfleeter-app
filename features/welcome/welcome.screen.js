import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import CertificationIcon from "../../assets/images/navigation/certification";
import Gas from "../../assets/images/navigation/gas";
import Mainteinance from "../../assets/images/navigation/mainteinance";
import ScanIcon from "../../assets/images/navigation/scan";
import Team from "../../assets/images/navigation/team";
import Tires from "../../assets/images/navigation/tires";
import { Text } from "../../components/typography/text.component";
import { Container } from "../../components/utils/container.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { OptionCard, OptionsWrapper, Title } from "./components/welcome.styles";

const WelcomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Spacer variant="top" size={3} />
          <Text variant="title">Hola, {user.name}</Text>
          <Text>Último ingreso el día 13/06/2022 a las 8:50 am.</Text>
          <Spacer variant="top" size={4} />
          <Title variant="bold">Indicadores KPI</Title>
          <OptionsWrapper>
            <OptionCard onPress={() => navigation.navigate("Indicators", { screen: "TiresScreen" })}>
              <Tires />
              <Spacer variant="top" />
              <Text variant="bold">Llantas</Text>
            </OptionCard>
            <OptionCard onPress={() => navigation.navigate("Indicators", { screen: "FuelsScreen" })}>
              <Gas />
              <Spacer variant="top" />
              <Text variant="bold">Combustibles</Text>
            </OptionCard>
            <OptionCard onPress={() => navigation.navigate("Indicators", { screen: "MaintenanceScreen" })}>
              <Mainteinance />
              <Spacer variant="top" />
              <Text variant="bold">Mantenimiento</Text>
            </OptionCard>
          </OptionsWrapper>
          <Spacer variant="top" size={4} />
          <Title variant="bold">Expediente</Title>
          <OptionsWrapper>
            <OptionCard onPress={() => navigation.navigate("EquipmentScreen")}>
              <Team />
              <Spacer variant="top" />
              <Text variant="bold">Equipo</Text>
            </OptionCard>
            <OptionCard>
              <ScanIcon />
              <Spacer variant="top" />
              <Text variant="bold">llanta</Text>
            </OptionCard>
          </OptionsWrapper>
          <Spacer variant="top" size={4} />
          <OptionsWrapper>
            <OptionCard onPress={() => navigation.navigate("CertificationScreen")}>
              <CertificationIcon />
              <Spacer variant="top" />
              <Text variant="bold">Certificación</Text>
            </OptionCard>
          </OptionsWrapper>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default WelcomeScreen;
