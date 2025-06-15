import { Routes} from '@angular/router';
import { RegisterComponent } from '../component/register/register.component';
import { ListUserComponent } from '../component/list-user/list-user.component';
import { LoginComponent } from '../component/login/login.component';
import { HomePageComponent } from '../component/home-page/home-page/home-page.component';
import { DetailsRecipeComponent } from '../component/details-recipe/details-recipe.component';
import { AddRecipeComponent } from '../component/add-recipe/add-recipe.component';
import { NavComponent } from '../component/nav/nav.component';

export const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'listUser',component:ListUserComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomePageComponent},
{path:'details/:id',component:DetailsRecipeComponent},
{path:'add-recipe',component:AddRecipeComponent}
];
