import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  previewAvi;
  profileForm: FormGroup;
  data = this.asAuth.getUserInfo();
  avi = this.data.image || '/assets/img/avi.png';

  constructor(public asAuth: AuthService, public fb: FormBuilder) {}
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.data?.name || ''],
      surname: [this.data?.surname || ''],
      address: [
        `${this.data?.address.full_Address}  ${this.data?.address.state} ${this.data?.address.country}` ||
          '',
      ],
    });
  }

  upload(e) {
    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.previewAvi = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.previewAvi = '';
    }
  }

  update() {
    if (this.previewAvi) {
      this.avi = this.previewAvi;
    }
  }
}
