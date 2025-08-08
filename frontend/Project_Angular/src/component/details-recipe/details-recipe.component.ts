import { Component } from '@angular/core';
import { IngredientRecipeService } from '../../services/ingredientRecipe/ingredient-recipe.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ingredient } from '../../interface/ingredient';
import { Recipe } from '../../interface/recipe';
import { RecipeService } from '../../services/recipe/recipe.service';
import { IngredientRecipe } from '../../interface/ingredientRecipe';
import { InstructionsPipe } from '../../pipes/instructions.pipe';

@Component({
  selector: 'app-details-recipe',
  imports: [CommonModule, RouterLink, InstructionsPipe],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.css'
})
export class DetailsRecipeComponent {
  constructor(
    private ingredientRecipeService: IngredientRecipeService,
    private route: ActivatedRoute, 
    private recipeservice: RecipeService
  ) { }

  id: number = 0;
  arr: Array<Ingredient> = [];
  ingredientAmounts: { [id: number]: string } = {};
  isLoading: boolean = true;
  
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

  getById(idIng: number) {
    this.ingredientRecipeService.getById(this.recipe.id, idIng).subscribe({
      next: (data) => {
        console.log("success");
        this.ingredientAmounts[idIng] = data.amount;
        console.log(this.ingredientAmounts);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const idParam = param.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadRecipeDetails();
      }
    });
  }

  loadRecipeDetails() {
    this.isLoading = true;
    
    this.ingredientRecipeService.getIngredientRecipe(this.id).subscribe({
      next: (data) => {
        this.arr = data;
        this.loadRecipeInfo();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  loadRecipeInfo() {
    this.recipeservice.getById(this.id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.loadIngredientAmounts();
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  loadIngredientAmounts() {
    for (let ingredient of this.arr) {
      this.getById(ingredient.id);
    }
  }

  getImageUrl(im: string): string {
    return `https://backend-project-angular.onrender.com/images/${(im)}`;
  }

  trackByIngredientId(index: number, ingredient: Ingredient): number {
    return ingredient.id;
  }

  getDifficultyColor(level: string): string {
    switch (level.toLowerCase()) {
      case 'easy': return '#27ae60';
      case 'medium': return '#f39c12';
      case 'hard': return '#e74c3c';
      default: return '#6c757d';
    }
  }

  getDifficultyIcon(level: string): string {
    switch (level.toLowerCase()) {
      case 'easy': return 'fas fa-star';
      case 'medium': return 'fas fa-star-half-alt';
      case 'hard': return 'fas fa-star';
      default: return 'fas fa-star';
    }
  }

  formatDuration(duration: string): string {
    return `${duration} דקות`;
  }

  formatAmount(amount: number): string {
    return `${amount} מנות`;
  }

  saveRecipe() {
    // Implementation for saving recipe to favorites
    alert('המתכון נשמר בהצלחה!');
  }

  shareRecipe() {
    // Implementation for sharing recipe
    if (navigator.share) {
      navigator.share({
        title: this.recipe.name,
        text: this.recipe.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק ללוח!');
    }
  }
}
