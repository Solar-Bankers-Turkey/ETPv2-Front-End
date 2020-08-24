import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'config';

  wifiForm: FormGroup;
  accountForm: FormGroup;
  notif: FormGroup;
  wifiList = [];
  forgetPass = false;
  addWifi = false;
  wifiError;
  new = false;

  constructor(
    private md: NgbModal,
    private fb: FormBuilder,
    public config: ConfigService
  ) {
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

  ngOnInit() {
    let a = this.config.getNetworks();
    let b = a.AvailableNetworks;
    for (let i = 0; i < b.length; i++) {
      this.wifiList.push({ name: b[i], saved: false });
      if (a.Interfaces.some((x) => x.SSID === b[i])) {
        this.changeValuePosition(this.wifiList, i, 0);
        this.wifiList[0].saved = true;
      }
      if (
        a.Config.wifi_networks.some((item) => item.ssid === b[i]) &&
        a.Config.wifi_networks.find((x) => x.ssid === b[i]).ssid !==
          a.Interfaces.find((x) => x.SSID === b[i]).SSID
      ) {
        this.wifiList.unshift({ name: b[i], saved: true });
      }
    }
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
    let a = this.config.getNetworks();
    if (a.Interfaces.some((x) => x.SSID !== wifi.name)) {
      this.wi.setValue(wifi.name);
      this.addWifi = true;
      if (wifi.saved) {
        this.forgetPass = true;
        let key = a.Config.wifi_networks.filter((x) => x.ssid === wifi.name);
        let ps = key[0]?.password || 'password';

        this.ps.setValue(ps);
      } else {
        this.wifiError = 'Enter password to connect!';
      }
    } else {
      this.addWifi = true;
      this.forgetPass = true;
      this.wi.setValue(wifi.name);
    }
  }

  saveWifi() {
    if (this.wifiForm.valid) {
      if (!this.new) {
        const tg = this.wifiList.indexOf(
          this.wifiList.find((element) => element.name === this.wi.value)
        );
        this.wifiList[tg].saved = true;
        this.changeValuePosition(this.wifiList, tg, 0);
        this.changeValuePosition(this.wifiList, 1, tg);
      } else {
        this.new = false;
        this.wifiList.unshift({ name: this.wi.value, saved: true });
      }
      this.clear();
      this.md.dismissAll();
    } else {
      this.wifiError = 'Please Enter Password to Connect';
    }
  }

  forgetWifi() {
    let a = this.wifiList.indexOf(
      this.wifiList.find((element) => element.name === this.wi.value)
    );
    this.wifiList[a].saved = false;
    if (a === 0) {
      this.wifiList.unshift({ name: undefined, saved: false });
    }
    this.wifiList.push(this.wifiList[a]);
    this.clear();
  }

  changeValuePosition = (arr, init, target) => {
    [arr[init], arr[target]] = [arr[target], arr[init]];
    return arr;
  };

  clear() {
    this.addWifi = false;
    this.forgetPass = false;
    this.wi.setValue('');
    this.wifiError = '';
    this.ps.setValue('');
    this.new = false;
  }

  submit() {
    console.log('submit');
  }
}
