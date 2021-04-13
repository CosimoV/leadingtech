import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapContentModalComponent } from './boostrap-content-modal.component';

describe('BoostrapContentModalComponent', () => {
  let component: BoostrapContentModalComponent;
  let fixture: ComponentFixture<BoostrapContentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapContentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
