import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeDashboardComponent } from './emloyee-dashboard.component';

describe('EmloyeeDashboardComponent', () => {
  let component: EmloyeeDashboardComponent;
  let fixture: ComponentFixture<EmloyeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmloyeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
