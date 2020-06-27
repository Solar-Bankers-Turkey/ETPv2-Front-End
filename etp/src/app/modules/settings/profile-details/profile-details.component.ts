import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  previewAvi;
  profileForm: FormGroup;
  constructor(public data: DataService, public fb: FormBuilder) {}
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.data?.name || ''],
      surname: [this.data?.surname || ''],
      address: [
        `${this.data?.user?.address.full_Address}  ${this.data?.user?.address.state} ${this.data?.user?.address.country}` ||
          '',
      ],
    });
  }

  upload(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

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
    this.data.avi = this.previewAvi;
  }
}
