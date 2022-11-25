import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/UI/button.component";
import { Input } from "../../../components/UI/input.component";
import { PickerSelect } from "../../../components/UI/picker.component";
import { Container } from "../../../components/utils/container.component";
import { KeyboardScrollAware } from "../../../components/utils/keyboard-view.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getEquipment, getEquipments, getTire } from "../../../services/equipments/actions";
import LoaderScreen from "./loader.screen";

const EquipmentScreen = () => {
  const dispatch = useDispatch(),
    [modal, setModal] = useState(false),
    [selectedCode, setSelectedCode] = useState(null),
    [codeValue, setCodeValue] = useState(""),
    [selectedTire, setSelectedTire] = useState(null),
    { equipments, equipment, tire, isLoading } = useSelector((state) => state.equipmentsReducer);

  useEffect(() => {
    dispatch(getEquipments());
  }, []);

  const options = equipments.map((eq) => ({
      label: `${eq.brand.name} - ${eq.licensePlate}`,
      value: eq.code,
    })),
    tiresOptions = equipment?.tires.map((tr) => ({
      label: `${tr.brand.name} - ${tr.code}`,
      value: tr.code,
    }));

  useEffect(() => {
    if (selectedCode) dispatch(getEquipment(selectedCode));
  }, [selectedCode]);

  useEffect(() => {
    if (selectedTire) dispatch(getTire({ code: selectedTire, setModal }));
  }, [selectedTire]);

  const onEquipmentChange = (_, value) => setSelectedCode(value),
    onTireChange = (_, value) => setSelectedTire(value);

  return isLoading ? (
    <LoaderScreen />
  ) : (
    <SafeArea>
      <KeyboardScrollAware>
        <Container>
          <Text variant="bold">Selecciona un equipo o busca por placa:</Text>
          <PickerSelect options={options} onChange={onEquipmentChange} value={selectedCode} disabled={isLoading} placeholder="Selecciona un equipo" />
          <Input placeholder="Escribe una placa" onChange={setCodeValue} value={codeValue} />
          <Button disabled={isLoading} onPress={() => setSelectedCode(codeValue)}>
            Buscar equipo
          </Button>
          <Spacer variant="top" size={3} />
          {equipment && (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text variant="subtitle">Equipo: {equipment?.equipment.code}</Text>
              <Spacer variant="top" />
              <Image style={{ width: 250, height: 250 }} resizeMode="contain" source={{ uri: equipment.distributionImage }} />
              <Spacer variant="top" size={2} />
              <PickerSelect options={tiresOptions} onChange={onTireChange} value={selectedTire} disabled={isLoading} placeholder="Selecciona una llanta" />
            </View>
          )}
        </Container>
      </KeyboardScrollAware>
      <Portal>
        <Dialog visible={modal} onDismiss={() => setModal(false)}>
          <Dialog.Title>Llanta {tire?.code}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bold">
              Marca: <Text>{tire?.brand.name}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Diseño de banda: <Text>{tire?.design.name}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Marca de banda: <Text>{tire?.design.brand?.name}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Tipo de diseño: <Text>{tire?.design.type?.value}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              DOT: <Text>{tire?.dot}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Profundidad: <Text>{tire?.depth}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Medida: <Text>{tire?.tireMeasure.value}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Construcción: <Text>{tire?.tireMeasure.construction?.value}</Text>
            </Text>
            <Spacer variant="top" />
            <Text variant="bold">
              Tipo: <Text>{tire?.type.value}</Text>
            </Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </SafeArea>
  );
};

export default EquipmentScreen;
