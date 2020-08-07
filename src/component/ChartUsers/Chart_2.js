// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import bar3d from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, bar3d, FusionTheme);

const Chart_2 = (props) =>{

let {data} = props;

// STEP 2 - Chart Data
const chartData = data 
// [
//     {
//         label: "HTML",
//         value: "30"
//       },
//       {
//         label: "CSS",
//         value: "20"
//       },
//       {
//         label: "JAVASCRIPt",
//         value: "80"
//       },
//       {
//         label: "REACT JS",
//         value: "60"
//       },
// ];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "bar3d", // The chart type
  width: "100%", // Width of the chart
  height: "450", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Languages",
      decimals: 0,
      pieRadius: '40%',
      bgColor: '#f6f6f6',
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

return (<ReactFC {...chartConfigs} />);

}

export default Chart_2;