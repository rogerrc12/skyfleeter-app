import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Debes ingresar tu correo.").email("Ingresa un correo válido."),
  password: Yup.string().required("Debes ingresar tu contraseña."),
});
