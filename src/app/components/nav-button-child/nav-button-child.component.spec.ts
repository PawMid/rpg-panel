import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonChildComponent } from './nav-button-child.component';

describe('NavButtonChildComponent', () => {
  let component: NavButtonChildComponent;
  let fixture: ComponentFixture<NavButtonChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
