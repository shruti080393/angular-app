import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryListService } from '../category-list.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  isSubmitted = false;

  // City Names
  Category = new Array();
  Difficulty = new Array();

  canShowChildComponent: boolean = false;

  constructor(public fb: FormBuilder, public categoryListService: CategoryListService) { }

  ngOnInit(): void {
    this.categoryListService.getCategoryList().subscribe( (data) => {
      data.trivia_categories.forEach( (element: Object) => {
        console.log("element is" + element)
        this.Category.push(element);
    });

      });

      this.Difficulty.push("Easy")
      this.Difficulty.push("Medium")
      this.Difficulty.push("Hard")
  }

  /*########### Form ###########*/
  quizForm = this.fb.group({
    category: ['', ''],
    difficulty: ['', '']
  })

  // Getter method to access formcontrols
  get getCategory() {
    return this.quizForm.get('category') ?? '';
  }

   // Getter method to access formcontrols
   get getDifficulty() {
    return this.quizForm.get('difficulty') ?? '';
  }

   /*########### Template Driven Form ###########*/
   onSubmit() {
    this.isSubmitted = true;
    if (!this.quizForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.quizForm.value));
      return true;
}

}

showChildComponent()
{
  this.canShowChildComponent = true;
}
}
