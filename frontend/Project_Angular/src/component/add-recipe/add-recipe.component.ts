import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../interface/recipe';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../interface/ingredient';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { User } from '../../interface/user';
import { IngredientRecipe } from '../../interface/ingredientRecipe';
import { IngredientRecipeService } from '../../services/ingredientRecipe/ingredient-recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  constructor(
    private recipeservice: RecipeService,
    private userService: UserService,
    private ingredientservice: IngredientService,
    private ingredientrecipeservice: IngredientRecipeService,
    private router: Router
  ) {}

  currentUser: User | null = null;
  recipe: Recipe = {
    id: 0,
    name: "",
    description: "",
    pic: "",
    level: "",
    duration: "",
    amount: 0,
    instructions: "",
    userId: 0
  };
  ingredients: Array<Ingredient> = [];
  selectedIngredient: Ingredient = { id: 0, name: "" };
  amount: string = "הכנס כמות";
  isChecked: boolean = false;
  newIngredient: string = "";
  dictionary: { [key: number]: string } = {};

  ngOnInit() {
    delete this.dictionary[0];
    this.currentUser = this.userService.currentUser;
    
    // Check if user is logged in
    if (!this.currentUser) {
      alert('אנא התחבר כדי להוסיף מתכון');
      this.router.navigate(['/login']);
      return;
    }

    this.ingredientservice.get().subscribe({
      next: (data) => {
        this.ingredients = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addIngredient(value: string) {
    this.ingredientservice.add(value).subscribe({
      next: (data) => {
        alert("התוסף בהצלחה");
        this.isChecked = false;
        this.newIngredient = "";
        this.ingredientservice.get().subscribe({
          next: (data) => {
            this.ingredients = data;
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  changeisChecked() {
    this.isChecked = !this.isChecked;
  }

  addRecipe() {
    if (!this.currentUser) {
      alert('אנא התחבר כדי להוסיף מתכון');
      this.router.navigate(['/login']);
      return;
    }

    this.recipe.userId = this.currentUser.id;
    
    this.recipeservice.add(
      this.recipe.name,
      this.recipe.description,
      this.recipe.pic,
      this.recipe.level,
      this.recipe.duration,
      this.recipe.amount,
      this.recipe.instructions,
      this.recipe.userId
    ).subscribe({
      next: (data) => {
        console.log("Calling addIngredientToRecipe with: ", data.id, this.dictionary);
        this.ingredientrecipeservice.addIngredientToRecipe(data.id, this.dictionary).subscribe({
          next: () => {
            console.log("success");
            alert("המתכון התוסף בהצלחה");
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  toggleIngredient(ing: Ingredient) {
    if (this.dictionary[ing.id] !== undefined) {
      delete this.dictionary[ing.id];
    } else {
      this.dictionary[ing.id] = ing.name;
    }
  }

  updateAmount(ing: Ingredient) {
    console.log(ing.amount);
    if (ing.amount !== undefined) {
      this.dictionary[ing.id] = ing.amount;
    }
  }
}
