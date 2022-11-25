import { useFocusEffect } from "@react-navigation/native";
import { Fragment, useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../components/typography/text.component";
import { SelectDates } from "../../../components/UI/select-date-ranges.component";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getFuelIndicators } from "../../../services/indicators/actions";
import { cleanIndicators, selectFuelIndicators, selectLoadingIndicators } from "../../../services/indicators/slice";
import { InfoCard, Price } from "../components/indicators.styles";
import ProgressChart from "../components/progress-chart.component";
import LoaderScreen from "./loader.screen";

const FuelsScreen = () => {
  const [rangeDates, setRangeDates] = useState({ start: new Date(), end: new Date() });

  const dispatch = useDispatch(),
    indicators = useSelector(selectFuelIndicators),
    isLoading = useSelector(selectLoadingIndicators);

  useFocusEffect(
    useCallback(() => {
      dispatch(getFuelIndicators(rangeDates));

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
              {indicators.performances?.map((perform, idx) => (
                <Fragment key={idx}>
                  <Text variant="bold">{perform.label}</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <Price>{perform.value}</Price>
                    <Text variant="caption">Rendimiento general</Text>
                  </InfoCard>
                  <Spacer variant="top" size={5} />
                </Fragment>
              ))}

              {indicators.tankLevels?.map((level, idx) => (
                <Fragment key={idx}>
                  <Text variant="bold">Stock en {level.label}</Text>
                  <Spacer variant="top" />
                  <InfoCard>
                    <ProgressChart
                      data={[level.value]}
                      range={1000}
                      indicator="gl"
                      progressInfo={
                        <>
                          <Text>0gl</Text>
                          <Text>100,000gl</Text>
                        </>
                      }
                    />
                  </InfoCard>
                  <Spacer variant="top" size={5} />
                </Fragment>
              ))}
            </>
          )}
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default FuelsScreen;
