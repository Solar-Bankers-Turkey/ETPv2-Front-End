import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.scss']
})
export class AuthhomeComponent implements OnInit {

  constructor(public set: SettingsService) { }

  ngOnInit(): void {
  }

}
