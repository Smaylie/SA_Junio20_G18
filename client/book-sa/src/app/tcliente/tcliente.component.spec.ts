import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TclienteComponent } from './tcliente.component';

describe('TclienteComponent', () => {
  let component: TclienteComponent;
  let fixture: ComponentFixture<TclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
