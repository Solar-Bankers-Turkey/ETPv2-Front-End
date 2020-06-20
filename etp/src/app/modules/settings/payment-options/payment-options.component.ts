import { Component, OnInit } from '@angular/core';
import { paymentInfo } from '@models/settings-options';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
})
export class PaymentOptionsComponent implements OnInit {
  paymentInfo = paymentInfo;
  constructor(private mds: NgbModal) {}

  ngOnInit(): void {}

  open(content: any) {
    this.mds.open(content, {
      centered: true,
      ariaLabelledBy: 'modal-basic-title',
    });
  }
  delete(arr: any[], pos: any) {
    return arr.splice(pos, 1);
  }
}
