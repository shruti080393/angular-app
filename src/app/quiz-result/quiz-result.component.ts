import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component( {
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: [ './quiz-result.component.css' ]
} )
export class QuizResultComponent implements OnInit {

  constructor( private dataService: DataService, private cdref: ChangeDetectorRef ) { }

  answersMap = new Map();
  questionAnswersList = new Array();
  selectedAnswersMap = new Map();

  correct_answers_selected_by_user_count: number = 0;
  correct_answers: number = 0;

  ngOnInit(): void {
    {
      this.answersMap = this.dataService.retrieveAnswersMap();
      this.questionAnswersList = this.dataService.retrieveQuestionAnswersList();
      this.selectedAnswersMap = this.dataService.retrieveSelectedAnswersMap();
    }
  }

  ngAfterViewChecked() {
    this.correct_answers = this.correct_answers_selected_by_user_count;
    this.cdref.detectChanges();
  }


  //get answers corresponding to a question
  getAnswersOnTheBasisOfQuestion( question: string ) {
    return this.answersMap.get( question );
  }


  //method to evaluate background color and keep track of no. of correct answers selected by user
  evaluateBackgroundColorAndCorrectAnswersCount( question: string, correct_answer: string, buttonValue: string ) {
    if ( this.selectedAnswersMap.get( question ) === correct_answer && correct_answer === buttonValue ) {
      this.correct_answers_selected_by_user_count++;
    }

    if ( this.selectedAnswersMap.get( question ) !== correct_answer && this.selectedAnswersMap.get( question ) === buttonValue ) {
      return "red";
    }
    else if ( buttonValue === correct_answer ) {
      return "green";

    }
    return "white";
  }



}
