import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudbooksComponent } from './crudbooks.component';

describe('CrudbooksComponent', () => {
  let component: CrudbooksComponent;
  let fixture: ComponentFixture<CrudbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
