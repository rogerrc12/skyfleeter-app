import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { registerTranslation } from "react-native-paper-dates";
import { Provider } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import NavigationApp from "./navigation";
import { store } from "./store";
import { styledTheme, theme } from "./theme";

registerTranslation("es", {
  save: "Guardar",
  selectSingle: "Seleccionar fecha",
  selectMultiple: "Seleccionar fechas",
  selectRange: "Seleccionar periodo",
  notAccordingToDateFormat: (inputFormat) => `El formato de fecha debe ser ${inputFormat}`,
  mustBeHigherThan: (date) => `Debe ser despues de ${date}`,
  mustBeLowerThan: (date) => `Debe ser antes de ${date}`,
  mustBeBetween: (startDate, endDate) => `Debe ser entre ${startDate} - ${endDate}`,
  dateIsDisabled: "Día no está permitido",
  previous: "Atrás",
  next: "Adelante",
  typeInDate: "Tipo en fecha",
  pickDateFromCalendar: "Seleccionar una fecha del calendario",
  close: "Cerrar",
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
          "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "sans-semibold": require("./assets/fonts/OpenSans-Bold.ttf"),
          "sans-bold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <StyledThemeProvider theme={styledTheme}>
        <PaperProvider theme={theme}>
          <NavigationApp appIsReady={appIsReady} />
        </PaperProvider>
      </StyledThemeProvider>
    </Provider>
  );
}
