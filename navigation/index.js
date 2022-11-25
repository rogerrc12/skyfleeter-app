import { NavigationContainer } from "@react-navigation/native";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { validateSession } from "../services/auth/actions";
import MainNavigator from "./stacks/main.navigator";

const NavigationApp = ({ appIsReady }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function hideSplashScreen() {
      await hideAsync();
    }

    if (appIsReady) hideSplashScreen();
  }, [appIsReady]);

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationApp;
