// utils/chart_config.js
import { Chart, registerables } from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix"; // Import MatrixController and MatrixElement

// Register Chart.js core components and the matrix plugin
Chart.register(...registerables, MatrixController, MatrixElement);

console.log("Registered Controllers:", Chart.registry.controllers);

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

export function createHeatmapChartConfig(matrix, labels, title) {
  return {
    type: "matrix",
    data: {
      datasets: [
        {
          label: title,
          data: matrix,
          width: ({ chart }) => chart.width / labels.length / 1.1,
          height: ({ chart }) => chart.height / labels.length / 1.1,
          backgroundColor: ({ dataIndex }) => {
            const value = matrix[dataIndex].v;
            let r, g, b;
            if (value < 0) {
              r = 200 + (1 - Math.abs(value)) * 55;
              g = 200 + (1 - Math.abs(value)) * 55;
              b = 255;
            } else if (value > 0) {
              r = 255;
              g = 200 + (1 - Math.abs(value)) * 55;
              b = 200 + (1 - Math.abs(value)) * 55;
            } else {
              r = 255;
              g = 255;
              b = 255;
            }
            return `rgba(${r}, ${g}, ${b}, 1)`;
          },
          labels: matrix.map((item) => item.v.toFixed(2)),
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
        },
        tooltip: {
          callbacks: {
            label: (context) => `Value: ${context.raw.v.toFixed(2)}`, // Display the correlation value
          },
        },
      },
      scales: {
        x: {
          ticks: {
            callback: (value) => labels[value] || "",
            font: {
              size: 10, // Adjust font size for better readability
            },
            padding: 40, // Add padding between axis and labels
            rotation: 45, // Rotate labels by 45 degrees
          },
        },
        y: {
          ticks: {
            callback: (value) => labels[value] || "",
            font: {
              size: 10, // Adjust font size for better readability
            },
            padding: 10, // Add padding between axis and labels
          },
        },
      },
    },
  };
}
