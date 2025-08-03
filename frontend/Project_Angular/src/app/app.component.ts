import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListUserComponent } from '../component/list-user/list-user.component';
import { RegisterComponent } from '../component/register/register.component';
import { NavComponent } from '../component/nav/nav.component';
import { LoginComponent } from '../component/login/login.component';
import { HomePageComponent } from '../component/home-page/home-page/home-page.component';
import { DetailsRecipeComponent } from '../component/details-recipe/details-recipe.component';
import { AddRecipeComponent } from '../component/add-recipe/add-recipe.component';
import { RecipeService } from '../services/recipe/recipe.service';
import { Recipe } from '../interface/recipe';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListUserComponent,RegisterComponent
    ,LoginComponent,RouterModule,NavComponent,HomePageComponent,
  DetailsRecipeComponent,AddRecipeComponent],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css'],
  standalone: true
})

export class AppComponent {
  constructor(private recipeService:RecipeService, @Inject(PLATFORM_ID) private platformId: Object){}
  title = 'HW';
  arr:Array<Recipe>=[
  ];
  ngOnInit() {
    debugger
    if (isPlatformBrowser(this.platformId)) {
  localStorage.setItem('connected', 'false');}
  this.recipeService.get().subscribe({
    next:(data)=>{
      debugger
      this.arr=data
    },
    error:err=>{
      debugger
      console.log(err)
    }
  })
}

}
