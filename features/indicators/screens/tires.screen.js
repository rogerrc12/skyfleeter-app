import { useFocusEffect } from "@react-navigation/native";
import { Fragment, useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../components/typography/text.component";
import { SelectDates } from "../../../components/UI/select-date-ranges.component";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getTireIndicators } from "../../../services/indicators/actions";
import { cleanIndicators, selectLoadingIndicators, selectTireIndicators } from "../../../services/indicators/slice";
import { BarIndicator, InfoCard, Price } from "../components/indicators.styles";
import PieChart from "../components/pie-chart.component";
import ProgressChart from "../components/progress-chart.component";
import LoaderScreen from "./loader.screen";

const TiresScreen = () => {
  const [rangeDates, setRangeDates] = useState({ start: new Date(), end: new Date() });

  const dispatch = useDispatch(),
    tireIndicators = useSelector(selectTireIndicators),
    isLoading = useSelector(selectLoadingIndicators);

  useFocusEffect(
    useCallback(() => {
      dispatch(getTireIndicators(rangeDates));

      return () => dispatch(cleanIndicators());
    }, [dispatch, rangeDates])
  );

  // INDICATORS
  const scrapTiresData = [26.3];

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
              {tireIndicators.kmCosts && (
                <>
                  <Text variant="bold">Costo por km.</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    {tireIndicators.kmCosts.map((cost) => (
                      <Fragment key={cost.label}>
                        <Price>{cost.value}</Price>
                        <Text variant="caption">{cost.label}</Text>
                        <Spacer variant="top" />
                      </Fragment>
                    ))}
                  </InfoCard>
                </>
              )}

              {tireIndicators.retreadsData && (
                <>
                  <Spacer variant="top" size={5} />
                  <Text variant="bold">Porcentaje de reencauches</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <ProgressChart
                      data={tireIndicators.retreadsData}
                      indicator="%"
                      range={1}
                      progressInfo={
                        <>
                          <Text>0%</Text>
                          <Text>100%</Text>
                        </>
                      }
                    />
                  </InfoCard>
                </>
              )}

              {tireIndicators.pressuresData && (
                <>
                  <Spacer variant="top" size={5} />
                  <Text variant="bold">Semáforo de intérvalo de presión</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <PieChart data={tireIndicators.pressuresData} />
                    <Spacer variant="top" />
                    {tireIndicators.pressuresData.map((d, i) => (
                      <Fragment key={i}>
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
                    <Spacer variant="top" size={2} />
                  </InfoCard>
                </>
              )}
              {tireIndicators.depthData && (
                <>
                  <Spacer variant="top" size={5} />
                  <Text variant="bold">Semáforo de intérvalo de profundidad</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <PieChart data={tireIndicators.depthData} />
                    <Spacer variant="top" />
                    {tireIndicators.depthData.map((d, i) => (
                      <Fragment key={i}>
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
                </>
              )}
              <Spacer variant="top" size={5} />
              <Text variant="bold">Porcentaje vida util de llantas desechadas</Text>
              <Spacer variant="top" />
              <InfoCard>
                <ProgressChart
                  data={scrapTiresData}
                  indicator="%"
                  progressInfo={
                    <>
                      <Text>0%</Text>
                      <Text>100%</Text>
                    </>
                  }
                />
              </InfoCard>
            </>
          )}
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default TiresScreen;
