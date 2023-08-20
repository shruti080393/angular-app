import { TestBed } from '@angular/core/testing';

import { GetQuestionAnswersListService } from './get-question-answers-list.service';

describe('GetQuestionAnswersListService', () => {
  let service: GetQuestionAnswersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQuestionAnswersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
