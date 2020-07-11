import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public set: SettingsService,
    private seo: SeoService
  ) {}

  resetForm: FormGroup;
  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Reset Password - Energy Trading Platform',
    });
    this.resetForm = this.fb.group({
      oldPass: ['', [Validators.required]],
      newPass: ['', [Validators.required]],
      confirm: [''],
    });
  }
}
