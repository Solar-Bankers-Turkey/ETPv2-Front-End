import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
})
export class WhyComponent implements OnInit {
  why = [
    {
      icon: '../../assets/svg/icons/icon-29.svg',
      title: 'No middle Man',
      desc: `Platform enables conflict-free energy trading without any intermediary`,
    },
    {
      icon: '../../assets/svg/icons/icon-31.svg',
      title: 'Low Distribution Cost',
      desc: ` Micro-grids dramatically reduce the cost of energy transportation`,
    },
    {
      icon: '../../assets/svg/icons/icon-37.svg',
      title: 'Secure & Transparent',
      desc: `Solar Bankers blockchain offers high level of security and complete
        trasparency.`,
    },

    {
      icon: '../../assets/svg/icons/icon-28.svg',
      title: 'Decentralized Power Generation',
      desc: `Connecting small-scale generators to the local energy market.`,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
