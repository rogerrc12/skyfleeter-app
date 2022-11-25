import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "../../features/auth/login.screen";
import RecoverPasswordScreen from "../../features/auth/recover-password.screen";
import CertificationScreen from "../../features/certification/certification.screen";
import EquipmentScreen from "../../features/equipment/screens/equipment.screen";
import WelcomeScreen from "../../features/welcome/welcome.screen";
import { logoutUser } from "../../services/auth/actions";
import { defaultOptions, headerBackLeft, HeaderTitle, HomeHeader } from "../utils/navigator-options";
import AlertsNavigator from "./alerts.navigator";
import IndicatorsNavigator from "./indicators.navigator";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch(),
    { isSignedIn } = useSelector((state) => state.authReducer);

  const onLogout = () => dispatch(logoutUser());

  return (
    <MainStack.Navigator screenOptions={{ ...defaultOptions, headerShown: false }}>
      {!isSignedIn ? (
        <>
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen
            name="RecoverPasswordScreen"
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => headerBackLeft(navigation),
              headerTitle: "",
            })}
            component={RecoverPasswordScreen}
          />
        </>
      ) : (
        <>
          <MainStack.Screen
            name="WelcomeScreen"
            options={({ navigation }) => ({
              headerShown: true,
              header: () => <HomeHeader handleLogout={onLogout} navigation={navigation} />,
            })}
            component={WelcomeScreen}
          />
          <MainStack.Screen name="Indicators" component={IndicatorsNavigator} />
          <MainStack.Screen
            name="CertificationScreen"
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: () => <HeaderTitle title="Certificación" />,
              headerLeft: () => headerBackLeft(navigation),
            })}
            component={CertificationScreen}
          />
          <MainStack.Screen
            name="EquipmentScreen"
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: () => <HeaderTitle title="Equipo" />,
              headerLeft: () => headerBackLeft(navigation),
            })}
            component={EquipmentScreen}
          />
          <MainStack.Screen name="Alerts" component={AlertsNavigator} />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
