import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import styled from "styled-components/native";

const DatesRangeWrapper = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: ${({ theme }) => theme.spaces[3]};
  padding-horizontal: ${({ theme }) => theme.spaces[4]};
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled(Text)`
  color: #fff;
`;

export function SelectDates({ dates, setRange }) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const onDismiss = () => setCalendarOpen(false);

  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setCalendarOpen(false);
      setRange({ start: startDate, end: endDate });
    },
    [setRange]
  );

  return (
    <>
      <DatesRangeWrapper onPress={() => setCalendarOpen(true)}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="calendar-outline" size={25} color="#FFF" style={{ marginRight: 5 }} />
          <Text style={{ color: "#FFF", fontWeight: "bold" }}>Filtrar</Text>
        </View>

        {dates.start && dates.end ? (
          <Date variant="bold">
            {format(dates.start, "dd/MM/yyyy", { locale: es })} al {format(dates.end, "dd/MM/yyyy", { locale: es })}
          </Date>
        ) : (
          <Date variant="bold">Filtrar por fechas</Date>
        )}
      </DatesRangeWrapper>
      <DatePickerModal
        locale="es"
        mode="range"
        visible={calendarOpen}
        onDismiss={onDismiss}
        startDate={dates.startDate}
        endDate={dates.endDate}
        onConfirm={onConfirm}
        startLabel="Inicio"
        endLabel="Final"
      />
    </>
  );
}
