import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class DataService {


  questionAnswersList: Array<string> = [];
  answersMap: Map<string, Array<string>> = new Map();
  selectedAnswersMap: Map<string, string> = new Map();

  constructor() { }

  storeQuestionAnswersList( questionAnswersList: Array<string> ) {
    this.questionAnswersList = questionAnswersList;
  }

  retrieveQuestionAnswersList() {
    return this.questionAnswersList;
  }

  storeAnswersMap( answersMap: Map<string, Array<string>> ) {
    this.answersMap = answersMap;
  }

  retrieveAnswersMap() {
    return this.answersMap;
  }

  storeSelectedAnswersMap( selectedAnswersMap: Map<string, string> ) {
    this.selectedAnswersMap = selectedAnswersMap;
  }

  retrieveSelectedAnswersMap() {
    return this.selectedAnswersMap;
  }
}
