import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  nodes = [
    {
      name: 'Room',
      iyte: 1400,
      totalMinRun: 13569,
    },
    {
      name: 'Window',
      iyte: 1400,
      totalMinRun: 13569,
    },
  ];
  sellForm: FormGroup;
  sellValid = false;
  node: string;
  constructor(
    public set: SettingsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Solar Nodes - Energy Trading Platform',
    });
    this.sellForm = this.fb.group({
      energy: [''],
      price: [''],
    });
  }
  open(content, val) {
    this.node = val;
    this.modalService.open(content, {
      centered: true,
      backdropClass: 'backdrop',
      size: 'lg',
    });
  }
}
