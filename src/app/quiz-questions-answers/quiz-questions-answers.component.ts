import { Component, Input, OnInit } from '@angular/core';
import { GetQuestionAnswersListService } from '../services/get-question-answers-list.service';
import { Results } from '../models/results';
import { DataService } from '../services/data.service';

@Component( {
  selector: 'app-quiz-questions-answers',
  templateUrl: './quiz-questions-answers.component.html',
  styleUrls: [ './quiz-questions-answers.component.css' ]
} )
export class QuizQuestionsAnswersComponent implements OnInit {

  constructor( private getQuestionAnswersListService: GetQuestionAnswersListService,
    private dataService: DataService ) { }

  question_answers_list = new Array();
  selectedAnswersMap = new Map<string, string>();
  isButtonClicked: boolean = false;

  answersList = new Array();

  @Input() category: string = '';
  @Input() difficulty: string = '';
  answersMap: Map<string, Array<string>> = new Map();

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.question_answers_list = [];
    this.getQuestionAnswersListService.getQuestionAnswersList( this.category, this.difficulty ).subscribe( ( data ) => {
      data.results.forEach( ( element: Results ) => {
        this.answersList = [];
        this.answersList.push( element.correct_answer );
        element.incorrect_answers.forEach( ( answer ) => {
          this.answersList.push( answer);
        } );

        //randomize the order of answers
        this.answersList.sort( () => .5 - Math.random() );

        //created to send data to result component
        this.answersMap?.set( element.question, this.answersList );

        this.question_answers_list.push( element );

        //service to store questionAnswers list and map of answers corresponding to a question
        this.dataService.storeQuestionAnswersList( this.question_answers_list );
        this.dataService.storeAnswersMap( this.answersMap );
      } );

    }
    );
  }

  //method to extract list of answers for a particular question
  getAnswersOnTheBasisOfQuestion( question: string ) {
    return this.answersMap.get( question );
  }

  //method to keep track of no. of questions answered
  calcuateNumOfQuestionsAnswered( questions: string, buttonValue: string ) {
    this.selectedAnswersMap.set( questions, buttonValue );
    this.dataService.storeSelectedAnswersMap( this.selectedAnswersMap );
  }

  //method to identify the background color to be set for the selected answer
  evaluateBackgroundColor( questions: string, buttonValue: string ) {
    if ( this.selectedAnswersMap.get( questions ) === buttonValue ) {
      return true;
    }
    else {
      return false;
    }
  }

}
