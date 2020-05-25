import { Injectable } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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

  //Room data
  iotData = [
    {
      series: [12],
      fill: {
        type: 'solid',
        colors: ['#05C985'],
      },
      room: 'Living Room',
      distance: '1034KM',
    },
    {
      series: [16],
      fill: {
        type: 'solid',
        colors: ['#FFAB4F'],
      },
      room: 'Studio',
      distance: '1034KM',
    },
    {
      series: [32],
      fill: {
        type: 'solid',
        colors: ['#EE423D'],
      },
      room: "Kid's room",
      distance: '1034KM',
    },
    {
      series: [18],
      fill: {
        type: 'solid',
        colors: ['#843FA0'],
      },
      room: 'Kitchen',
      distance: '1034KM',
    },
  ];

  //line chart options
  multi = [
    {
      name: 'Living Room',
      series: [
        {
          name: 'Monday',
          value: 100,
        },
        {
          name: 'Tuesday',
          value: 400,
        },
        {
          name: 'Wednessday',
          value: 500,
        },
        {
          name: 'Thursday',
          value: 300,
        },
        {
          name: 'Friday',
          value: 200,
        },
        {
          name: 'Saturday',
          value: 500,
        },
        {
          name: 'Sunday',
          value: 400,
        },
      ],
    },
    {
      name: 'Studio',
      series: [
        {
          name: 'Monday',
          value: 50,
        },
        {
          name: 'Tuesday',
          value: 200,
        },
        {
          name: 'Wednessday',
          value: 100,
        },
        {
          name: 'Thursday',
          value: 300,
        },
        {
          name: 'Friday',
          value: 200,
        },
        {
          name: 'Saturday',
          value: 600,
        },
        {
          name: 'Sunday',
          value: 400,
        },
      ],
    },
    {
      name: 'Kids Room',
      series: [
        {
          name: 'Monday',
          value: 300,
        },
        {
          name: 'Tuesday',
          value: 100,
        },
        {
          name: 'Wednessday',
          value: 500,
        },
        {
          name: 'Thursday',
          value: 300,
        },
        {
          name: 'Friday',
          value: 200,
        },
        {
          name: 'Saturday',
          value: 100,
        },
        {
          name: 'Sunday',
          value: 200,
        },
      ],
    },
    {
      name: 'Kitchen',
      series: [
        {
          name: 'Monday',
          value: 200,
        },
        {
          name: 'Tuesday',
          value: 100,
        },
        {
          name: 'Wednessday',
          value: 200,
        },
        {
          name: 'Thursday',
          value: 300,
        },
        {
          name: 'Friday',
          value: 100,
        },
        {
          name: 'Saturday',
          value: 500,
        },
        {
          name: 'Sunday',
          value: 400,
        },
      ],
    },
  ];

  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  yScaleMax = 700;
  yScaleMin = 0;
  colorScheme = {
    domain: ['#05C985', '#FFAB4F', '#EE423D', '#843FA0'],
  };
  constructor() {}
}
