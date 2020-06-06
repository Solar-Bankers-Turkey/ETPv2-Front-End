import { Injectable, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Injectable({
  providedIn: 'root',
})
export class ChartsettingsService {
  //room radial chart
  @ViewChild('chart') chart: ChartComponent;
  public roomOptions: Partial<ChartOptions> = {
    chart: {
      type: 'radialBar',
      width: 130,
      parentHeightOffset: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '55%',
          background: '#242e42',
        },
        track: {
          background: `#3e4e6c`,
          margin: 0,
        },

        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            formatter: function (val) {
              return parseInt(val.toString(), 10).toString() + ' %';
            },
            offsetY: 5,
            color: '#fff',
            fontSize: '16px',
            show: true,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
  };

  //iot device radial charts
  public iotOptions: Partial<ChartOptions> = {
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '55%',
          background: '#242e42',
        },
        track: {
          background: `#3e4e6c`,
          margin: 0,
        },

        dataLabels: {
          show: false,
        },
      },
    },
  };

  // line chart
  lineOptions: Partial<ChartOptions> = {
    series: [
      { data: [100, 400, 500, 300, 200, 500, 400], name: 'Living Room' },
      { data: [50, 200, 100, 300, 200, 600, 400], name: 'Studio' },

      {
        data: [300, 120, 503, 330, 200, 230, 120],
        name: "Kid's room",
      },
      {
        data: [201, 130, 350, 200, 444, 244, 300],
        name: 'Kitchen',
      },
    ],
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      foreColor: '#869AAC',
      height: 430,
    },
    tooltip: {
      theme: 'dark',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 1.9,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      borderColor: '#20293c',
    },
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednessday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      axisBorder: {
        show: true,
        color: '#20293c',
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        opacity: 0.9,
        stroke: {
          color: '#1f8efa',
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          type: 'solid',
          color: 'red',
        },
      },
    },
  };

  sparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      height: 40,
    },
    stroke: {
      width: 1.9,
    },
  };

  constructor() {}
}
