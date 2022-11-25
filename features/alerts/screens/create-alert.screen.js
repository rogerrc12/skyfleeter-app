import { Button } from "../../../components/UI/button.component";
import { Input } from "../../../components/UI/input.component";
import { PickerSelect } from "../../../components/UI/picker.component";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";

const CreateAlertScreen = () => {
  return (
    <SafeArea>
      <Container>
        <PickerSelect options={[{ label: "Roger Rengifo", value: "roger rengifo" }]} label="Usuario" placeholder="Selecciona" />
        <PickerSelect
          options={[
            { label: "Alta", value: "alta" },
            { label: "Media", value: "media" },
          ]}
          label="Prioridad de alerta"
          placeholder="Selecciona"
        />
        <Input label="Mensaje de alerta" placeholder="Escribe un mensaje de alerta" numberOfLines={5} />
        <Spacer variant="top" />
        <Button>Crear</Button>
      </Container>
    </SafeArea>
  );
};

export default CreateAlertScreen;
