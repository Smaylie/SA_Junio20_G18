import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudComponent } from './esolicitud.component';

describe('EsolicitudComponent', () => {
  let component: EsolicitudComponent;
  let fixture: ComponentFixture<EsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
