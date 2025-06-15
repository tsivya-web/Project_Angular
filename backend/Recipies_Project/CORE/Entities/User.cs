using System;
using System.Collections.Generic;

namespace WebApi.Entities;

public partial class User
{
    public int Id { get; set; }

    public string? FName { get; set; }

    public string? LName { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Recipe> Recipes { get; set; } = new List<Recipe>();
}
