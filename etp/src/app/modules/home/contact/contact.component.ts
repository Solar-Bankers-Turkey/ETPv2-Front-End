import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  error = false;
  closed = false;
  contact: FormGroup;
  errorMsg = '';
  url = window.location.href.split('/')[3];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contact = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: [],
      message: ['', [Validators.required]],
    });
  }

  get name() {
    return this.contact.get('name');
  }
  get email() {
    return this.contact.get('email');
  }
  get subject() {
    return this.contact.get('subject');
  }
  get message() {
    return this.contact.get('message');
  }

  contactUs() {
    if (this.contact.invalid) {
      this.error = true;
      this.errorMsg = 'You missed out some fields!';
    } else {
      alert('Thanks for reaching out!');
      this.contact.reset();
    }
  }
  check() {
    this.error = false;
    this.errorMsg = '';
  }
}
