import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Rules - Energy Trading Platform',
    });
  }
}
