import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbooksComponent } from './cbooks.component';

describe('CbooksComponent', () => {
  let component: CbooksComponent;
  let fixture: ComponentFixture<CbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
