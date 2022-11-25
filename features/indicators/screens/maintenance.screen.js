import { useFocusEffect } from "@react-navigation/native";
import { Fragment, useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../components/typography/text.component";
import { SelectDates } from "../../../components/UI/select-date-ranges.component";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getMainteinanceIndicators } from "../../../services/indicators/actions";
import { cleanIndicators, selectLoadingIndicators, selectMaintenanceIndicators } from "../../../services/indicators/slice";
import { BarIndicator, InfoCard, Price } from "../components/indicators.styles";
import PieChart from "../components/pie-chart.component";
import ProgressChart from "../components/progress-chart.component";
import LoaderScreen from "./loader.screen";

const MaintenanceScreen = () => {
  const [rangeDates, setRangeDates] = useState({ start: new Date(), end: new Date() });

  const dispatch = useDispatch(),
    maintenanceIndicators = useSelector(selectMaintenanceIndicators),
    isLoading = useSelector(selectLoadingIndicators);

  useFocusEffect(
    useCallback(() => {
      dispatch(getMainteinanceIndicators(rangeDates));

      return () => dispatch(cleanIndicators());
    }, [dispatch, rangeDates])
  );

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <SelectDates dates={rangeDates} setRange={setRangeDates} />
          <Spacer variant="top" size={2} />
          {isLoading ? (
            <LoaderScreen />
          ) : (
            <>
              {maintenanceIndicators.percentages?.map((percentage, idx) => (
                <Fragment key={idx}>
                  <Text variant="bold">{percentage.label}</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <ProgressChart
                      data={[percentage.value]}
                      indicator="%"
                      progressInfo={
                        <>
                          <Text>0%</Text>
                          <Text>100%</Text>
                        </>
                      }
                    />
                  </InfoCard>
                  <Spacer variant="top" size={5} />
                </Fragment>
              ))}

              {maintenanceIndicators.workshop && (
                <>
                  <Text variant="bold">Atención de taller</Text>
                  <Spacer variant="top" />
                  <InfoCard style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    {maintenanceIndicators.workshop?.map((work, idx) => (
                      <View key={idx} style={{ alignItems: "center" }}>
                        <Price>{work.value}</Price>
                        <Text variant="caption">{work.label?.toLowerCase().includes("horas") ? "Horas" : "Días"}</Text>
                      </View>
                    ))}
                  </InfoCard>
                  <Spacer varaint="top" size={5} />
                </>
              )}

              {maintenanceIndicators.equipments && (
                <Fragment>
                  <Text variant="bold">Equipos activos en flota vs equipo en taller</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <PieChart data={maintenanceIndicators.equipments} />
                    <Spacer variant="top" />
                    {maintenanceIndicators.equipments.map((d, idx) => (
                      <Fragment key={idx}>
                        <Spacer variant="top" />
                        <BarIndicator bgColor={d.color}>
                          <Text variant="bold" style={{ color: "#FFF" }}>
                            {d.value}
                          </Text>
                        </BarIndicator>
                        <Spacer variant="top" />
                        <Text>{d.label}</Text>
                      </Fragment>
                    ))}
                  </InfoCard>
                  <Spacer variant="top" size={5} />
                </Fragment>
              )}

              {maintenanceIndicators.reports && (
                <>
                  <Text variant="bold">Reportes pendiente de atender</Text>
                  <Spacer variant="top" />
                  {maintenanceIndicators.reports.map((report, idx) => (
                    <InfoCard key={idx}>
                      <Price>{report.value}</Price>
                      <Text variant="caption">{report.label}</Text>
                    </InfoCard>
                  ))}
                </>
              )}
            </>
          )}
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default MaintenanceScreen;
