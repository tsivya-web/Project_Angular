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
  constructor(private ingredientRecipeService: IngredientRecipeService,
    private route: ActivatedRoute, private recipeservice: RecipeService) { }
  id: number = 0
  arr: Array<Ingredient> = []
  ingredientAmounts: { [id: number]: string } = {};
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
  }


  getById(idIng: number) {

    this.ingredientRecipeService.getById(this.recipe.id, idIng).subscribe((data) => {
      debugger
      console.log("success")
      this.ingredientAmounts[idIng] = data.amount;
      console.log(this.ingredientAmounts)
    },
      err => {
        debugger
        console.log(err)
      });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const idParam = param.get('id')
      if (idParam) {
        this.id = +idParam
        this.ingredientRecipeService.getIngredientRecipe(this.id).subscribe(
          data => {
            // debugger
            this.arr = data
            this.recipeservice.getById(this.id).subscribe(
              (x) => {
                debugger
                this.recipe = x
                for (let index = 0; index < this.arr.length; index++) {
                  this.getById(this.arr[index].id)
                }


              },
              err => {
                console.log(err)
              }
            )
          },
          err => {
            debugger
            console.log(err)
          }
        )


      }
    })

  }
  getImageUrl(im: string): string {
    return `https://localhost:7261/images/${encodeURIComponent(im)}`;
  }



}
