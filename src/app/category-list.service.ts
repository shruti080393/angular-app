import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { CategoriesResponse } from './models/categoriesResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http : HttpClient) { }

  getCategoryList(): Observable<CategoriesResponse>{

    let response;
    const reqHeader = new HttpHeaders(
      {
       "Content-Type": "application/json",
      });
  return this.http.get<CategoriesResponse>("https://opentdb.com/api_category.php")




  }
}
