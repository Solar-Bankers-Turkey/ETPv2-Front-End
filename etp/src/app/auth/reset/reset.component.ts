import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  constructor(private fb: FormBuilder, public set: SettingsService) {}

  resetForm: FormGroup;
  ngOnInit(): void {
    this.resetForm = this.fb.group({
      oldPass: ['', [Validators.required]],
      newPass: ['', [Validators.required]],
      confirm: [''],
    });
  }
}
