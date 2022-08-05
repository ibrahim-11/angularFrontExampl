import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertUpdateComponent } from './transfert-update.component';

describe('TransfertUpdateComponent', () => {
  let component: TransfertUpdateComponent;
  let fixture: ComponentFixture<TransfertUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
