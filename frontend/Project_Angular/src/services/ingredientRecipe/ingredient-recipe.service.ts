import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientRecipe } from '../../interface/ingredientRecipe';
import { Observable } from 'rxjs';
import { Ingredient } from '../../interface/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientRecipeService {

  constructor(private http:HttpClient) { }

   url="https://localhost:7261/api/IngredientRecipe"

   arr:Array<IngredientRecipe>=[]

   getIngredientRecipe(id:number):Observable<Ingredient[]>{
    debugger
    const fullpath=`${this.url}/${id}`
    return this.http.get<Ingredient[]>(fullpath);
   }
   addIngredientToRecipe(id:number,dic:{[key:number]:string}):Observable<any>{
    const fullpath=`${this.url}/${id}`
    return this.http.post<any>(fullpath,dic)
   }
   getById(idRecipe:number,idIng:number):Observable<IngredientRecipe>{
    debugger
    const fullpath=`${this.url}/${idRecipe}/${idIng}`
    return this.http.get<IngredientRecipe>(fullpath);
   }

}
