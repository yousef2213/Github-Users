// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Chart_2 = (props) =>{
// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
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
    data: props.data
  }
};

return (<ReactFC {...chartConfigs} />);

}

export default Chart_2;