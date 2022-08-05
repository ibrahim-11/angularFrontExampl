import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertViewComponent } from './transfert-view.component';

describe('TransfertViewComponent', () => {
  let component: TransfertViewComponent;
  let fixture: ComponentFixture<TransfertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
