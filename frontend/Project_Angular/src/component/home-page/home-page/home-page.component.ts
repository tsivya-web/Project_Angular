import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../../../interface/recipe';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
constructor(private recipeService:RecipeService ){}
arr:Array<Recipe>=[
];
ngOnInit(){
this.recipeService.get().subscribe({
  next:(data)=>{
    debugger
    this.arr=data
  },
error:err=>{
  debugger
console.log(err)
}})
}

getImageUrl(im:string): string {
   return `https://localhost:7261/images/${encodeURIComponent(im)}`;
}
}