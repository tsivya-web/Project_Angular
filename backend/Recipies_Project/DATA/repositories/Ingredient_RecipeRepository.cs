using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace CORE.repositories
{
    public class Ingredient_RecipeRepository : IIngredient_RecipeRepository
    {
        DataContext _dataContext;
        IIngredientRepository _ingredientRepository;
        public Ingredient_RecipeRepository(DataContext dataContext, IIngredientRepository ingredientRepository)
        {
            _dataContext = dataContext;
            _ingredientRepository = ingredientRepository;
        }
        public List<Ingredient> GetIngredientRecipe(int id)
        {
            List<Ingredient> l=new List<Ingredient>();
            var ingredients = _dataContext.IngredientRecipes.
   Where(ri => ri.IdRecipe == id)
            .Select(ri => ri.IdIngredient)
            .ToList();
           foreach( var item in ingredients)
            {
                foreach(Ingredient i in _dataContext.Ingredients)
                {
                    if(i.Id==item.Value)
                    l.Add(i);
                }
            }
            return l;
         
        }
        
       public  void AddIngredient(int id, Dictionary<int, string> intIngredient)
        {
            foreach (var item in intIngredient)
            {
                _dataContext.IngredientRecipes.Add(new IngredientRecipe
                {
                    Id = _dataContext.IngredientRecipes.Count() + 1,

                    IdIngredient = item.Key,
                    IdRecipe = id,
                    Amount = item.Value
                });
                _dataContext.SaveChanges();
            }


        }
      public  IngredientRecipe getById(int idRecipe, int idIngredient)
        {
           return _dataContext.IngredientRecipes.FirstOrDefault(x => x.IdIngredient == idIngredient && x.IdRecipe == idRecipe);
        }

       
    }


 
    }
