import { ApexOptions } from "apexcharts";
import { barData, barcategories, barcolors } from ".";

export default function useMarketingTrands() {
  let barseries: any = [{ data: barData }];

  const barOptions: ApexOptions = {
    chart: {
      type: "bar",
      background: "#fff",
      toolbar: { show: false },
     
    },
    grid: {
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        lines: {
          show: false, //or just here to disable only y axis
        },
      },
      padding: {
        left: 30,
      },
    },
 
    colors: barcolors,

    plotOptions: {
      bar: {
        
        borderRadius: 10,
        horizontal: true,
        distributed: true,
        barHeight: "21px",
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%"
      },

      offsetX: -10,

      style: {
        fontSize: "12px",
        fontWeight: 'bold',
        colors: ["#fff"],
      },
    },

    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      labels: {
        formatter: (value: any) => value.toFixed(0) + "%",
        style: {
          fontWeight: '600',
          fontSize:"10px"
        },
      },
      categories: barcategories,
    },
    yaxis: {
      labels: {
        style: {
          fontWeight: '700',
          fontSize:"10px"
        },
      },

    }
    
  };
  return {
    barOptions,
    barseries,
  };
}
