import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'log-msg',
  templateUrl: './log-msg.component.html',
  styleUrls: ['./log-msg.component.scss'],
})
export class LogMsgComponent implements OnInit {
  constructor(public data: DataService, public set: SettingsService) {}

  ngOnInit(): void {}
}
