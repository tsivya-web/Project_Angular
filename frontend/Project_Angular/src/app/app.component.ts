import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListUserComponent } from '../component/list-user/list-user.component';
import { RegisterComponent } from '../component/register/register.component';
import { NavComponent } from '../component/nav/nav.component';
import { LoginComponent } from '../component/login/login.component';
import { HomePageComponent } from '../component/home-page/home-page/home-page.component';
import { DetailsRecipeComponent } from '../component/details-recipe/details-recipe.component';
import { AddRecipeComponent } from '../component/add-recipe/add-recipe.component';


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
  title = 'HW';
  ngOnInit() {
    debugger
  localStorage.setItem('connected', 'false');
}
}
