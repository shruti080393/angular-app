import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionsAnswersComponent } from './quiz-questions-answers.component';

describe('QuizQuestionsAnswersComponent', () => {
  let component: QuizQuestionsAnswersComponent;
  let fixture: ComponentFixture<QuizQuestionsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionsAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizQuestionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
