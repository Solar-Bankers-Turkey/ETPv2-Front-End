import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'config';

  wifiForm: FormGroup;
  accountForm: FormGroup;
  notif: FormGroup;
  wifiList = [];
  forgetPass = false;
  wifiConnect = {
    internet: true,
    connections: { wifi: true, ethernet: true },
    connectedTo: 'TFTC Energy',
    availableNetworks: [
      'TFTC Energy',
      'FiberHGW_ZTYS96_2.4GHz',
      'JotForm',
      'JotForm',
      'DIRECT-d1-HP 1200 Neverstop',
      'EMQ24',
      'JotForm',
      'LinoviG-guest',
      'DIRECT-2E-HP OfficeJet Pro 6960',
      'HP-Print-88-LaserJet 400 MFP',
    ],
    savedNetworks: [
      { name: 'EMQ24', password: 'Emrecan.24' },
      { name: 'TFTC Energy', password: 'FswkuMPn' },
    ],
    error: null,
    ip: '192.168.12.28',
  };
  addWifi = false;
  wifiError;
  constructor(private md: NgbModal, private fb: FormBuilder) {
    let a = this.wifiConnect.availableNetworks;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === this.wifiConnect.connectedTo) {
        this.wifiList[0] = { name: a[i], saved: true };
      }
      if (this.wifiConnect.savedNetworks.some((item) => item.name === a[i])) {
        this.wifiList.splice(1, 1, { name: a[i], saved: true });
      } else {
        this.wifiList.push({ name: a[i], saved: false });
      }
    }

    this.wifiForm = this.fb.group({
      wifi_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.accountForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.notif = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  open(modal) {
    this.md.open(modal, {
      centered: true,
    });
  }

  get wi() {
    return this.wifiForm.get('wifi_name');
  }

  get ps() {
    return this.wifiForm.get('password');
  }

  connect(wifi) {
    if (wifi.name !== this.wifiConnect.connectedTo) {
      this.wi.setValue(wifi.name);
      this.addWifi = true;
      if (wifi.saved) {
        this.forgetPass = true;
        let key = this.wifiConnect.savedNetworks.filter(
          (x) => x.name === wifi.name
        );
        this.ps.setValue(key[0].password);
      } else {
        this.wifiError = 'Enter password to connect!';
      }
    } else {
      this.addWifi = true;
      this.forgetPass = true;
      this.wi.setValue(wifi.name);
      this.ps.setValue('password');
    }
  }

  clear() {
    this.addWifi = false;
    this.forgetPass = false;
    this.wi.setValue('');
    this.wifiError = '';
    this.ps.setValue('');
  }
}
