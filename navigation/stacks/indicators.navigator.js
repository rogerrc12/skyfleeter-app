import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FuelsScreen from "../../features/indicators/screens/fuels.screen";
import MaintenanceScreen from "../../features/indicators/screens/maintenance.screen";
import TiresScreen from "../../features/indicators/screens/tires.screen";
import { defaultOptions, headerBackLeft, HeaderTitle } from "../utils/navigator-options";

const IndicatorsStack = createNativeStackNavigator();

const IndicatorsNavigator = () => {
  return (
    <IndicatorsStack.Navigator screenOptions={{ ...defaultOptions }}>
      <IndicatorsStack.Screen
        name="TiresScreen"
        options={({ navigation }) => ({ headerTitle: () => <HeaderTitle title="Indicadores de llantas" />, headerLeft: () => headerBackLeft(navigation) })}
        component={TiresScreen}
      />
      <IndicatorsStack.Screen
        name="MaintenanceScreen"
        options={({ navigation }) => ({ headerTitle: () => <HeaderTitle title="Indicadores de Mantenimiento" />, headerLeft: () => headerBackLeft(navigation) })}
        component={MaintenanceScreen}
      />
      <IndicatorsStack.Screen
        name="FuelsScreen"
        options={({ navigation }) => ({ headerTitle: () => <HeaderTitle title="Indicadores de combustibles" />, headerLeft: () => headerBackLeft(navigation) })}
        component={FuelsScreen}
      />
    </IndicatorsStack.Navigator>
  );
};

export default IndicatorsNavigator;
