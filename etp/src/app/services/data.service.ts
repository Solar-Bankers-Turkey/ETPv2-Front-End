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
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  //devices data
  devices = [
    {
      series: [16],
      name: 'Camera',
      icon: 'camera',
    },
    {
      series: [47],
      name: 'Water',
      icon: 'tint',
    },
    {
      series: [85],
      name: 'Light',
      icon: 'lightbulb',
    },
    {
      series: [70],
      name: 'Plugs',
      icon: 'plug',
    },
  ];

  //line chart options

  @ViewChild('chart') chart: ChartComponent;
  chartOptions: Partial<ChartOptions> = {
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
          color: '#869AAC',
          width: 1,
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

  domain = ['#05C985', '#FFAB4F', '#EE423D', '#843FA0'];

  constructor() {}
}
