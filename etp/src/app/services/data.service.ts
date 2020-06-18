import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user = JSON.parse(localStorage.getItem('etpuser'));
  name = this.user?.name;
  surname = this.user?.surname;
  avi = this.user?.image;
  pv = this.user?.installedPower?.pv;
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
  report = [
    {
      status: 'warning',
      date: 1590969600,
      message: 'Your battery is full.',
    },
    {
      status: 'info',
      date: 1588291200,
      message: 'Weekly report is ready.',
    },
    {
      status: 'warning',
      date: 1585699200,
      message: 'Overusage on T phase.',
    },
    {
      status: 'setting',
      date: 1583020800,
      message:
        'The daily system backup has been completed and uploaded to the server.',
    },
    {
      status: 'setting',
      date: 1580515200,
      message: 'Payment option has been changed.',
    },
    {
      status: 'info',
      date: 1577836800,
      message: 'System update: software version 2.1.3 is now available.',
    },
  ];
  isLoggedIn = JSON.parse(localStorage.getItem('etplog'));

  total = this.iotData
    .map((x) => {
      return x.series[0];
    })
    .reduce((a, c) => {
      return a + c;
    });

  domain = ['#05C985', '#FFAB4F', '#EE423D', '#843FA0'];

  constructor() {}
}
