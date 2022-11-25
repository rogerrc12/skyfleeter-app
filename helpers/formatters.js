const PRESSURES_COLORS = ["#A63ACE", "#FDB515", "#AFB6FE"],
  DEPTH_COLORS = ["#C71A2D", "#ECCA41", "#359F42", "#DADDDC"],
  EQUIPMENTS_COLORS = ["#359F42", "#ECCA41", "#828282"];

export const formatTireIndicators = (indicators) => {
  let kmCosts, retreadsData, pressuresData, depthData;

  // FORMAT COSTO X KM
  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("costo por km"))) {
    let costs = indicators.find((indicator) => indicator.description.toLowerCase().includes("costo por km")).data;

    kmCosts = costs.map((cost) => {
      return {
        label: cost.label,
        value: cost.label.toLowerCase().includes("costo acumulado")
          ? `$${cost.value.toFixed(2)}`
          : cost.label.toLowerCase().includes("distancia acumulada")
          ? `${cost.value} km`
          : `$${cost.value.toFixed(2)} / km`,
      };
    });
  }

  // FORMAT PORCENTAJES
  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("porcentajes"))) {
    let percentages = indicators.find((indicator) => indicator.description.toLowerCase().includes("porcentajes")).data;
    retreadsData = [percentages.find((p) => p.label.toLowerCase() === "reencauches").value];
  }

  // FORMAT INTERVALOS DE PRESIÓN
  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("intervalos de presión"))) {
    let intervals = indicators.find((indicator) => indicator.description.toLowerCase().includes("intervalos de presión")).data;

    pressuresData = intervals.map((int, idx) => ({
      value: int.value,
      label: int.label,
      color: PRESSURES_COLORS[idx] || "#777",
    }));
  }

  // FORMAT INTERVALOS DE PROFUNDIDAD
  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("intervalos de profundidad"))) {
    let intervals = indicators.find((indicator) => indicator.description.toLowerCase().includes("intervalos de profundidad")).data;

    depthData = intervals.map((int, idx) => ({
      value: int.value,
      label: int.label,
      color: DEPTH_COLORS[idx] || "#777",
    }));
  }

  return { kmCosts, retreadsData, pressuresData, depthData };
};

export const formatFuelIndicators = (indicators) => {
  let performances, tankLevels;

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("rendimiento"))) {
    performances = indicators
      .find((indicator) => indicator.description.toLowerCase().includes("rendimiento"))
      .data.map((p) => ({
        label: p.label,
        value: `${p.value.toFixed(2)} km/gl`,
      }));
  }

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("nivel en tanques"))) {
    tankLevels = indicators
      .find((indicator) => indicator.description.toLowerCase().includes("nivel en tanques"))
      .data.map((stock) => ({
        label: stock.label,
        value: stock.value,
      }));
  }

  return { performances, tankLevels };
};

export const formatMaintenanceIndicators = (indicators) => {
  let percentages, workshop, equipments, reports;

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("porcentaje mantenimiento"))) {
    percentages = indicators.find((indicator) => indicator.description.toLowerCase().includes("porcentaje mantenimiento")).data;
  }

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("taller"))) {
    workshop = indicators
      .find((indicator) => indicator.description.toLowerCase().includes("taller"))
      .data.map((w) => ({
        label: w.label,
        value: w.value ? w.value.toFixed(2) : w.value,
      }));
  }

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("equipos"))) {
    equipments = indicators
      .find((indicator) => indicator.description.toLowerCase().includes("equipos"))
      .data.map((equipment, idx) => ({
        label: equipment.label,
        value: equipment.value,
        color: EQUIPMENTS_COLORS[idx] || "#777",
      }));
  }

  if (indicators.find((indicator) => indicator.description.toLowerCase().includes("reportes"))) {
    reports = indicators
      .find((indicator) => indicator.description.toLowerCase().includes("reportes"))
      .data.map((report) => ({
        label: report.label,
        value: report.value,
      }));
  }

  return { percentages, workshop, equipments, reports };
};
