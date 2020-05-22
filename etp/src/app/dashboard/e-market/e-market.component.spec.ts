import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMarketComponent } from './e-market.component';

describe('EMarketComponent', () => {
  let component: EMarketComponent;
  let fixture: ComponentFixture<EMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
