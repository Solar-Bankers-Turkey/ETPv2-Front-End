import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getNetworks() {
    let response = {
      Interfaces: [
        {
          Name: 'enp5s0',
          Index: 1,
          InternetAccess: false,
          SSID: '',
          Up: true,
          NetworkType: 'ethernet',
          Ipv4: '',
        },
        {
          Name: 'wlp4s0',
          Index: 2,
          InternetAccess: true,
          SSID: 'EMQ50',
          Up: true,
          NetworkType: 'wifi',
          Ipv4: '192.168.1.20',
        },
      ],
      Hotspot: {
        SSID: 'solarnode',
        Password: '',
      },
      InternetAccess: true,
      AvailableNetworks: [
        'EMQ24',
        'EMQ50',
        'SUPERONLINE_WiFi_5858',
        'gizemonur',
        'TurkTelekom_TE064',
        'SUPERONLINE_WiFi_5G_5858',
        'SUPERONLINE_WiFi_0333',
        'MyWifi',
        'The Gramophone',
        'VodafoneNet-E8PNZD',
        'TurkTelekom_TDFEA',
        'Besiktas',
        'SUPERONLINE_WiFi_2645',
        'DIRECT-i2',
        'SUPERONLINE_WiFi_1701',
        'SUPERONLINE_WiFi_5G_0333',
      ],
      Config: {
        wifi_networks: [
          {
            ssid: 'TFTC Energy',
            password: 'FswkuMPn',
            saved: true,
          },
          {
            ssid: 'Redmi',
            password: 'Emrecan.9999',
            saved: true,
          },
          {
            ssid: 'EMQ50',
            password: 'Emrecan.50',
            saved: true,
          },
        ],
      },
      ConfigPath: '/home/eco/connman_config.json',
    };

    return response;
  }
}
