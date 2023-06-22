import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTutorialComponent } from './workspace-tutorial.component';

describe('WorkspaceTutorialComponent', () => {
  let component: WorkspaceTutorialComponent;
  let fixture: ComponentFixture<WorkspaceTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
