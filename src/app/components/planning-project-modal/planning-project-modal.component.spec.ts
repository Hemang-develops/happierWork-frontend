import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningProjectModalComponent } from './planning-project-modal.component';

describe('PlanningProjectModalComponent', () => {
  let component: PlanningProjectModalComponent;
  let fixture: ComponentFixture<PlanningProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanningProjectModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
