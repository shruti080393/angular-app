import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Results } from '../models/results';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  constructor(private dataService: DataService, private cdref: ChangeDetectorRef) { }

  answersMap = new Map();
  questionAnswersList = new Array();
  selectedAnswersMap = new Map();
  correctAnswersMap = new Map();
  // correct_answer_count: Array<string> = [];

  correct_answer_count: number = 0;
  correct_answers: number  = 0;

  ngOnInit(): void {
    {
      this.answersMap = this.dataService.retrieveAnswersMap();
      this.questionAnswersList = this.dataService.retrieveQuestionAnswersList();
      this.selectedAnswersMap = this.dataService.retrieveSelectedAnswersMap();
      this.correctAnswersMap = this.dataService.retrieveCorrectAnswersMap();
    }
  }
  ngOnChanges(): void {


  }


  ngAfterViewChecked()
  {
    this.correct_answers = this.correct_answer_count;
    this.cdref.detectChanges();
  }


  getAnswersOnTheBasisOfQuestion(question: string){
    return this.answersMap.get(question);
}

evaluateBackgroundColor(question: string, correct_answer: string, buttonValue: string)
{

  console.log("coming in evaluateBackgroundColor")
  if(this.selectedAnswersMap.get(question) === correct_answer && correct_answer === buttonValue)
  {
    console.log("coming in if clause")
    this.correct_answer_count++;
  }

  if(this.selectedAnswersMap.get(question) !== correct_answer && this.selectedAnswersMap.get(question) === buttonValue)
  {
    return "red";
  }
  else if(buttonValue === correct_answer)
  {
    return "green";

  }
  return "white";
}



}
