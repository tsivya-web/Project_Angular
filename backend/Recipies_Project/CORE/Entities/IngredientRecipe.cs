using System;
using System.Collections.Generic;

namespace WebApi.Entities;

public partial class IngredientRecipe
{
    public int Id { get; set; }

    public int? IdRecipe { get; set; }

    public int? IdIngredient { get; set; }

    public string? Amount { get; set; }

    public virtual Ingredient? IdIngredientNavigation { get; set; }

    public virtual Recipe? IdRecipeNavigation { get; set; }
}
