import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertsScreen from "../../features/alerts/screens/alerts.screen";
import CreateAlertScreen from "../../features/alerts/screens/create-alert.screen";
import { defaultOptions, headerBackLeft, HeaderTitle } from "../utils/navigator-options";

const AlertsStack = createNativeStackNavigator();

const AlertsNavigator = () => {
  return (
    <AlertsStack.Navigator screenOptions={{ ...defaultOptions }}>
      <AlertsStack.Screen
        name="AlertsList"
        options={({ navigation }) => ({ headerTitle: () => <HeaderTitle title="Alertas" />, headerLeft: () => headerBackLeft(navigation) })}
        component={AlertsScreen}
      />
      <AlertsStack.Screen
        name="CreateAlertScreen"
        options={({ navigation }) => ({ headerTitle: () => <HeaderTitle title="Crear alerta" />, headerLeft: () => headerBackLeft(navigation) })}
        component={CreateAlertScreen}
      />
    </AlertsStack.Navigator>
  );
};

export default AlertsNavigator;
