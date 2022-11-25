import { FlatList } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/UI/button.component";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";
import AlertItem from "../components/alert-item.component";
import { AlertsWrapper } from "../components/alerts.styles";

const AlertsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <AlertsWrapper>
          <Text variant="bold">Alertas activas:</Text>
          <Spacer variant="top" />
          <FlatList data={[{ id: 1, id: 2 }]} renderItem={({ item }) => <AlertItem item={item} />} />
        </AlertsWrapper>
        <Button onPress={() => navigation.navigate("CreateAlertScreen")}>Crear alerta</Button>
      </Container>
    </SafeArea>
  );
};

export default AlertsScreen;
