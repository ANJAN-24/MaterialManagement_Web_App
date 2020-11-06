import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerdemoComponent } from './spinnerdemo.component';

describe('SpinnerdemoComponent', () => {
  let component: SpinnerdemoComponent;
  let fixture: ComponentFixture<SpinnerdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
