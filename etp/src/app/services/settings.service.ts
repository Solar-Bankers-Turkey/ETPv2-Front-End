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
