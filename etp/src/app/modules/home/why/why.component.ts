import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
})
export class WhyComponent implements OnInit {
  url = window.location.href.split('/')[3];
  why = [
    {
      icon: '../../assets/svg/icons/icon-29.svg',
      titleEn: 'No middle Man',
      titleTr: 'Orta adam yok',
      descEn: `Platform enables conflict-free energy trading without any intermediary `,
      descTr: `Platform, aracı olmadan güvenli ve ucuz enerji ticareti sağlar.`,
    },
    {
      icon: '../../assets/svg/icons/icon-31.svg',
      titleEn: 'Low Distribution Cost',
      titleTr: 'Düşük İletim Maliyeti',
      descEn: ` Micro-grids dramatically reduce the cost of energy transportation `,
      descTr: `Mikro şebekeler enerji iletim maliyetini önemli ölçüde azaltır.`,
    },
    {
      icon: '../../assets/svg/icons/icon-37.svg',
      titleEn: 'Secure & Transparent',
      titleTr: 'Güvenli ve Şeffaf',
      descEn: `Solar Bankers blockchain offers high level of security and complete
        trasparency. `,
      descTr: `Solar Bankers blokzincir teknolojisi yüksek düzeyde güvenlik ve tam şeffaflık sunar.

`,
    },

    {
      icon: '../../assets/svg/icons/icon-28.svg',
      titleEn: 'Decentralized Power Generation',
      titleTr: 'Dağıtık Yapıdaki Enerji Üretimi',
      descEn: `Connecting small-scale generators to the local energy market. `,
      descTr: `Küçük ölçekli üretim noktalarını yerel enerji pazarına bağlamak.`,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
