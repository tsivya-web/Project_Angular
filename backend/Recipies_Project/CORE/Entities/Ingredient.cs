using System;
using System.Collections.Generic;

namespace WebApi.Entities;

public partial class Ingredient
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<IngredientRecipe> IngredientRecipes { get; set; } = new List<IngredientRecipe>();
}
