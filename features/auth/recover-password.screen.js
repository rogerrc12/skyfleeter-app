import React, { useState } from "react";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/UI/button.component";
import { Input } from "../../components/UI/input.component";
import { Container } from "../../components/utils/container.component";
import { DismissKeyboard } from "../../components/utils/dismiss-keyboard.component";
import { Spacer } from "../../components/utils/spacer.component";
import { AuthWrapper } from "./components/auth.styles";

const RecoverPasswordScreen = () => {
  const [email, setEmail] = useState(""),
    [emailError, setEmailError] = useState("");

  const handleResetPassword = () => {
    if (!email) setEmailError("Ingresa un correo válido.");

    console.log("reseting passwor...");
  };

  return (
    <DismissKeyboard>
      <Container>
        <Spacer variant="top" size={2} />
        <AuthWrapper>
          <Text variant="title">Reinicia tu contraseña</Text>
          <Text>Primero, ingresa tu correo electrónico donde recibirás un código de verificación.</Text>
          <Spacer variant="top" size={2} />
          <Input label="Email" placeholder="tucorreo@gmail.com" value={email} onChange={setEmail} error={emailError} autoCapitalize="none" keyboardType="email-address" />
          <Spacer variant="top" />
          <Button onPress={handleResetPassword} loading={false}>
            Continuar
          </Button>
        </AuthWrapper>
      </Container>
    </DismissKeyboard>
  );
};

export default RecoverPasswordScreen;
