using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public interface IIngredient_RecipeRepository
    {
        List<Ingredient> GetIngredientRecipe(int id);
        void AddIngredient(int id, Dictionary<int,string> intIngredient);

        IngredientRecipe getById(int idRecipe, int idIngredient);
    }
}
