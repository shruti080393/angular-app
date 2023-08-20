import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAnswersListResponse } from '../models/questionAnswersListResponse';


@Injectable( {
  providedIn: 'root'
} )
export class GetQuestionAnswersListService {

  constructor( private http: HttpClient ) {

  }

  getQuestionAnswersList( category: string, difficulty: string ): Observable<QuestionAnswersListResponse> {
    difficulty = difficulty.toLowerCase();
    return this.http.get<QuestionAnswersListResponse>( `https://opentdb.com/api.php?amount=5&category=${ category }&difficulty=${ difficulty }&type=multiple` )

  }

}
