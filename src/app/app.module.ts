import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


import { QuizQuestionsAnswersComponent } from './quiz-questions-answers/quiz-questions-answers.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    QuizQuestionsAnswersComponent,
    QuizResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
