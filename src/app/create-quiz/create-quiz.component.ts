import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryListService } from '../services/category-list.service';
import { TriviaCategories } from '../models/triviaCategories';

@Component( {
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: [ './create-quiz.component.css' ]
} )
export class CreateQuizComponent implements OnInit {
  isSubmitted: boolean = false;
  category_list = new Array();
  difficulty_list = new Array();

  /*########### Form ###########*/
  quizForm = this.fb.group( {
    category: [ "" ],
    difficulty: [ "" ]
  } );

  constructor( public fb: FormBuilder, public categoryListService: CategoryListService ) { }

  ngOnInit(): void {
    this.categoryListService.getCategoryList().subscribe( ( data ) => {
      data.trivia_categories.forEach( ( element: TriviaCategories ) => {
        this.category_list.push( element );
      } );
    } );
    this.difficulty_list.push( "Easy" )
    this.difficulty_list.push( "Medium" )
    this.difficulty_list.push( "Hard" )
  }

  onSubmit() {
    this.isSubmitted = true;
  }

}
