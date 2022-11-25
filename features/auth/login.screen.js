import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Dimensions, ImageBackground, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/images/logo";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Checkbox } from "../../components/UI/checkbox.component";
import { Input } from "../../components/UI/input.component";
import { Container } from "../../components/utils/container.component";
import { DismissKeyboard } from "../../components/utils/dismiss-keyboard.component";
import { KeyboardScrollAware } from "../../components/utils/keyboard-view.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/utils/spacer.component";
import { getSecureItem, setSecureItem } from "../../helpers/secure-store";
import { loginUser } from "../../services/auth/actions";
import { AuthWrapper } from "./components/auth.styles";
import { loginSchema } from "./validation/schemas";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch(),
    isProcessing = useSelector((state) => state.authReducer.isProcessing),
    [hidePassword, setHidePassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values.remember) await setSecureItem("loginDetails", { email: values.email });
      dispatch(loginUser(values));
    },
  });
  const { setFieldValue } = formik;

  useEffect(() => {
    (async () => {
      let loginDetails = await getSecureItem("loginDetails");

      if (loginDetails) {
        setFieldValue("remember", true);
        setFieldValue("email", loginDetails.email);
      }
    })();
  }, [setFieldValue]);

  return (
    <KeyboardScrollAware>
      <ImageBackground source={require("../../assets/images/bg/login-bg.webp")} style={{ width: Dimensions.get("window").width, height: 175 }} />
      <SafeArea>
        <DismissKeyboard>
          <Container>
            <Spacer variant="top" size={2} />
            <Logo width={175} />
            <Spacer variant="top" size={2} />
            <AuthWrapper>
              <Text variant="title">Iniciar sesión</Text>
              <Text>Ingresa tus datos para iniciar sesión.</Text>
              <Spacer variant="top" size={2} />
              <Input
                label="Email"
                placeholder="tucorreo@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                autoCapitalize="none"
                keyboardType="email-address"
                error={formik.touched.email && formik.errors.email}
              />
              <Input
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                secureTextEntry={hidePassword}
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                error={formik.touched.password && formik.errors.password}
                right={
                  <TextInput.Icon
                    name={() => <MaterialCommunityIcons name={hidePassword ? "eye-off" : "eye"} size={24} color="#BDBDBD" />}
                    onPress={() => setHidePassword((prev) => !prev)}
                    style={{ marginTop: 13 }}
                  />
                }
              />
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Checkbox status={formik.values.remember} onPress={() => formik.setFieldValue("remember", !formik.values.remember)}>
                  <Text>Recordarme</Text>
                </Checkbox>
                <TouchableOpacity onPress={() => navigation.navigate("RecoverPasswordScreen")}>
                  <Text variant="link">Olvidé mi contraseña</Text>
                </TouchableOpacity>
              </View>
              <Spacer variant="top" size={3} />
              <Button onPress={formik.handleSubmit} loading={isProcessing} disabled={!formik.isValid}>
                Iniciar sesión
              </Button>
            </AuthWrapper>
            <Text style={{ alignSelf: "center" }}>Skyfleeter 2022 - Todos los derechos reservados</Text>
          </Container>
        </DismissKeyboard>
      </SafeArea>
    </KeyboardScrollAware>
  );
};

export default LoginScreen;
