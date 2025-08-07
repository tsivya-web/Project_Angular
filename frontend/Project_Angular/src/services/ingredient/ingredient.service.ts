import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../../interface/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http:HttpClient) { }
  url="https://backend-project-angular.onrender.com/api/Ingredient"

arr:Array<Ingredient>=new Array<Ingredient>()

get():Observable<Ingredient[]>{
  return this.http.get<Ingredient[]>(this.url)
}

add( value:string):Observable<void>{
  const fullpath=`${this.url}/${value}`
  return this.http.post<void>(fullpath,{});
}

}
