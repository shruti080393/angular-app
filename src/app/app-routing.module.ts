import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

const routes: Routes = [ { path: '', redirectTo: 'create', pathMatch: "full" },
{ path: "create", component: CreateQuizComponent },
{ path: "results", component: QuizResultComponent }, ];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
