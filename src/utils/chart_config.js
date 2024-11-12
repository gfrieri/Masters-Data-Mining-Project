// utils/chart_config.js
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export { Chart };

export function createLineChartConfig(labels, datasets, title) {
  return {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };
}

export function createBarChartConfig(labels, datasets, title) {
  return {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };
}

export function createScatterChartConfig(datasets, title) {
  return {
    type: "scatter",
    data: {
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };
}
