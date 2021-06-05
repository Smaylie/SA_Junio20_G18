import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeditorialComponent } from './teditorial.component';

describe('TeditorialComponent', () => {
  let component: TeditorialComponent;
  let fixture: ComponentFixture<TeditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
