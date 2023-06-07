import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTutorialComponent } from './board-tutorial.component';

describe('BoardTutorialComponent', () => {
  let component: BoardTutorialComponent;
  let fixture: ComponentFixture<BoardTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
