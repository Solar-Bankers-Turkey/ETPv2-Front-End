import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'etp-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {}
}
