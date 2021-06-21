import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbitacoraComponent } from './tbitacora.component';

describe('TbitacoraComponent', () => {
  let component: TbitacoraComponent;
  let fixture: ComponentFixture<TbitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
