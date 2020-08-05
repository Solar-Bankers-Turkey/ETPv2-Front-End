import { Injectable, ViewChild, OnInit, Directive } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexTooltip,
  ApexPlotOptions,
  ApexFill,
} from 'ng-apexcharts';
import { SettingsService } from './settings.service';
import { ForecastService } from './forecast.service';
import { DatePipe } from '@angular/common';

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
  yaxis: ApexYAxis;
  legend: ApexLegend;
};

@Directive()
@Injectable({
  providedIn: 'root',
})
export class ChartsettingsService implements OnInit {
  //room radial chart
  forecast;
  weatherData = [];
  datePipe = new DatePipe('en');

  @ViewChild('chart') chart: ChartComponent;
  roomOptions: Partial<ChartOptions> = {
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
            formatter: (val) => {
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

  // iot device radial charts
  iotOptions: Partial<ChartOptions> = {
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

  // sparkliine Chart
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
          color: '#b99745',
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

  //  History Bar chart
  barOptions: Partial<ChartOptions> = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 30, 56, 41, 58, 63],
      },
      {
        name: 'Revenue',
        data: [10, 20, 30, 40, 30, 20, 10],
      },
      {
        name: 'Free Cash Flow',
        data: [20, 61, 56, 36, 75, 68, 22],
      },
    ],
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50',
        endingShape: 'flat',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent'],
    },
    grid: {
      borderColor: '#20293c',
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: '#869AAC',
        },
      },
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
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#869AAC',
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: '#869AAC',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  //Weather forecast Chart
  weatherForecastOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      type: 'rangeBar',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '17',
        startingShape: 'rounded',
        endingShape: 'rounded',
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: '#869AAC',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  domain = ['#b99745', '#FFFFFF', '#05C985'];

  constructor(public set: SettingsService, private cast: ForecastService) {}

  ngOnInit(): void {}

  async forecastDetails() {
    await this.cast
      .getForecast()
      .toPromise()
      .then((data) => {
        this.forecast = data;
      });
    this.weatherData = [
      {
        name: 'Weekly Temperature',
        data: this.forecast.daily.map((days) => ({
          x: this.datePipe.transform(days.dt, 'EEEE'),
          y: [this.getCelcius(days.temp.min), this.getCelcius(days.temp.max)],
        })),
      },
    ];

    this.weatherForecastOptions.series = this.weatherData;
    return this.forecast;
  }

  getCelcius(K) {
    return (K - 273.15).toFixed(1);
  }
}
