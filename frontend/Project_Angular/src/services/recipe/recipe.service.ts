import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../interface/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  arr:Array<Recipe>=new Array<Recipe>();

url="https://localhost:7261/api/Recipe"


  get():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url)
  }

  add( name:string,  description:string,  pic:string,  level:string, duration:string, amount:number, instructions:string,  UserId:number):Observable<Recipe>{
    const fullpath=`${this.url}/${name}/${description}/${pic}/${level}/${duration}/${amount}/${instructions}/${UserId}`
return this.http.post<Recipe>(fullpath,{})
  }

  getById(id:number):Observable<Recipe>{
    const fullpath=`${this.url}/${id}`
    return this.http.get<Recipe>(fullpath)
  }


  }

