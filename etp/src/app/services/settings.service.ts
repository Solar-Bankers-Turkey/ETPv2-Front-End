import { Injectable, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  //Room data
  iotData = [
    {
      series: [174],
      sparkline: {
        data: [100, 400, 500, 300, 200, 500, 400],
        name: 'Living Room',
      },

      fill: {
        type: 'solid',
        colors: ['#05C985'],
      },
      room: 'Living Room',
      distance: '1034KM',
    },
    {
      series: [201],
      sparkline: {
        data: [50, 200, 100, 300, 200, 600, 400],
        name: 'Studio',
      },
      fill: {
        type: 'solid',
        colors: ['#FFAB4F'],
      },
      room: 'Studio',
      distance: '1034KM',
    },
    {
      series: [289],
      sparkline: {
        data: [201, 130, 350, 200, 444, 244, 300],
        name: 'Kitchen',
      },
      fill: {
        type: 'solid',
        colors: ['#EE423D'],
      },
      room: "Kid's room",
      distance: '1034KM',
    },
    {
      series: [196],
      sparkline: {
        data: [300, 120, 503, 330, 200, 230, 120],
        name: "Kid's room",
      },
      fill: {
        type: 'solid',
        colors: ['#843FA0'],
      },
      room: 'Kitchen',
      distance: '1034KM',
    },
  ];

  total = this.iotData
    .map((x) => {
      return x.series[0];
    })
    .reduce((a, c) => {
      return a + c;
    });

  // breakpoints
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1100px)', Breakpoints.Small])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  isMedium$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );
  // classes
  sidetoggle = '';
  overlay = 'overlay';
  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleClass() {
    this.sidetoggle = this.sidetoggle == 'active' ? '' : 'active';

    this.overlay = this.sidetoggle == 'active' ? 'overlay active' : 'overlay';
  }

  dismiss() {
    this.sidetoggle = '';
    this.overlay = 'overlay';
  }
}
