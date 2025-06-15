using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities;

public partial class Recipe
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Pic { get; set; }

    public string? Level { get; set; }

    public string? Duration { get; set; }

    public int? Amount { get; set; }

    public string? Instructions { get; set; }

    public int? UserId { get; set; }

    public virtual ICollection<IngredientRecipe> IngredientRecipes { get; set; } = new List<IngredientRecipe>();

    public virtual User? User { get; set; }
}
