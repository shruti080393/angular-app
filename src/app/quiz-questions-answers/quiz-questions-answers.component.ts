import { Component, Input, OnInit } from '@angular/core';
import { GetQuestionAnswersListService } from '../get-question-answers-list.service';
import { Results } from '../models/results';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz-questions-answers',
  templateUrl: './quiz-questions-answers.component.html',
  styleUrls: ['./quiz-questions-answers.component.css']
})
export class QuizQuestionsAnswersComponent implements OnInit {

  constructor(private getQuestionAnswersListService: GetQuestionAnswersListService,
    private dataService: DataService, private router: Router) { }

  questions = '';
  correct_answer = '';
  incorrect_answers = new Array();
  question_answers_list = new Array();

  allQuestionsAnswered: boolean = false;
  //clickCount = new Array();
clickCount = new Map<string, string>();
isButtonClicked: boolean = false;
backgroundColor: string = '';

answersList = new Array();

@Input() category: string = '';
@Input() difficulty: string = '';
answersMap: Map<string, Array<string>> = new Map();
correctAnswersMap: Map<string, string> = new Map();

  ngOnInit(): void {

  }

  ngOnChanges()
  {
    this.getQuestionAnswersListService.getQuestionAnswersList(this.category, this.difficulty).subscribe((data) =>
    {
      data.results.forEach( (element: Results) => {
        this.answersList = [];
        // this.incorrect_answers = [];
        // this.question_answers_list = [];


        this.incorrect_answers.push(JSON.parse(JSON.stringify(element)).incorrect_answers)

        this.answersList.push(element.correct_answer);
        element.incorrect_answers.forEach( (answer) => {
          this.answersList.push(answer);
        });

        this.answersList.sort( () => .5 - Math.random() );
        this.answersMap?.set(element.question, this.answersList);

        this.correctAnswersMap.set(element.question, element.correct_answer);

        this.question_answers_list.push(element);
        console.log("map of answers is" + JSON.stringify(this.answersMap));

        this.dataService.storeQuestionAnswersList(this.question_answers_list);
        this.dataService.storeAnswersMap(this.answersMap);
        this.dataService.storeCorrectAnswersMap(this.correctAnswersMap);
    });

    }
    );
  }

  getAnswersOnTheBasisOfQuestion(question: string){
    return this.answersMap.get(question);
}

  increaseClickCount(questions: string, buttonValue: string)
  {
    this.clickCount.set(questions,buttonValue);
    this.dataService.storeSelectedAnswersMap(this.clickCount);
  }

  evaluateBackgroundColor(questions: string, buttonValue: string)
  {
    if(this.clickCount.get(questions) === buttonValue)
    {

        return true;
    }
    else{
      
      return false;
    }
  }

  sendDataToAnotherComponent()
  {
    let data = { question_answer_list: this.question_answers_list, answers_map: this.answersMap};

    let navigationExtras: NavigationExtras = {
      state: {
        data: data,
      },
    };
    this.router.navigate(["/results"], navigationExtras);
  }

}
