import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'app-e-market',
  templateUrl: './e-market.component.html',
  styleUrls: ['./e-market.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class EMarketComponent implements OnInit {
  sellValid = false;
  buyValid = false;

  market = [
    {
      seller: 'Flora Bio',
      location: 'A7',
      supply: '12',
      price: '12000',
      date: '',
    },
    {
      seller: 'DVL R&D',
      location: 'A8',
      supply: '12',
      price: '12000',
      date: '',
    },
    {
      seller: 'TFTC',
      location: 'A9',
      supply: '12',
      price: '12000',
      date: '',
    },
    {
      seller: 'Jot Form',
      location: 'A9',
      supply: '12',
      price: '12000',
      date: '',
    },
    {
      seller: 'MobilMed',
      location: 'A10',
      supply: '12',
      price: '12000',
      date: '',
    },
    {
      seller: 'Esinotek',
      location: 'Aa',
      supply: '12',
      price: '12000',
      date: '',
    },
  ];

  sellForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public set: SettingsService,
    public config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.sellForm = this.fb.group({
      energy: [''],
      price: [''],
    });
  }

  open(content) {
    this.modalService.open(content, {
      centered: true,
      backdropClass: 'backdrop',
      size: 'lg',
    });
  }
}
