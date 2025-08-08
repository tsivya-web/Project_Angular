import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../../../interface/recipe';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private recipeService: RecipeService) {}

  arr: Array<Recipe> = [];
  isLoading: boolean = true;
  searchTerm: string = '';
  selectedLevel: string = '';
  selectedDuration: string = '';

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.isLoading = true;
    this.recipeService.get().subscribe({
      next: (data) => {
        this.arr = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  getImageUrl(im: string): string {
    return `https://backend-project-angular.onrender.com/images/${im}`;
  }

  trackByRecipeId(index: number, recipe: Recipe): number {
    return recipe.id;
  }

  getFilteredRecipes(): Recipe[] {
    let filtered = this.arr;

    if (this.searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedLevel) {
      filtered = filtered.filter(recipe =>
        recipe.level.toLowerCase() === this.selectedLevel.toLowerCase()
      );
    }

    if (this.selectedDuration) {
      const duration = parseInt(this.selectedDuration);
      filtered = filtered.filter(recipe => {
        const recipeDuration = parseInt(recipe.duration);
        switch (this.selectedDuration) {
          case '15': return recipeDuration <= 15;
          case '30': return recipeDuration > 15 && recipeDuration <= 30;
          case '60': return recipeDuration > 30 && recipeDuration <= 60;
          case '120': return recipeDuration > 60;
          default: return true;
        }
      });
    }

    return filtered;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedLevel = '';
    this.selectedDuration = '';
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

  getRecipeStats() {
    const totalRecipes = this.arr.length;
    const easyRecipes = this.arr.filter(r => r.level.toLowerCase() === 'easy').length;
    const mediumRecipes = this.arr.filter(r => r.level.toLowerCase() === 'medium').length;
    const hardRecipes = this.arr.filter(r => r.level.toLowerCase() === 'hard').length;

    return {
      total: totalRecipes,
      easy: easyRecipes,
      medium: mediumRecipes,
      hard: hardRecipes
    };
  }
}