using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CORE.repositories;
using WebApi.Entities;

namespace CORE.service
{
    public class Ingredient_RecipeService:IIngredient_RecipeService
    {
        IIngredient_RecipeRepository _RecipeRepository;
        public Ingredient_RecipeService(IIngredient_RecipeRepository i)
        {
            _RecipeRepository = i;
        }
     public   List<Ingredient> GetIngredientRecipe(int id) {
          return  _RecipeRepository.GetIngredientRecipe(id);
        }
      
        

       public void AddIngredient(int id, Dictionary<int,string> intIngredient)
        {
            _RecipeRepository.AddIngredient(id, intIngredient);
        }
       public IngredientRecipe getById(int idRecipe, int idIngredient)
        {
            return _RecipeRepository.getById(idRecipe, idIngredient);
        }


    }
}
