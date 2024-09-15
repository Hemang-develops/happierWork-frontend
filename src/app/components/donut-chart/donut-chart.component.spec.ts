import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChart2Component } from './donut-chart.component';

describe('DonutChart2Component', () => {
  let component: DonutChart2Component;
  let fixture: ComponentFixture<DonutChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
