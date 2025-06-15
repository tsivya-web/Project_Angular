using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace CORE.repositories
{
    public class RecipiesRepository:IRecipiesRepository
    {
        DataContext _dataContext;
        public RecipiesRepository(DataContext context)
        {
            _dataContext = context;
        }
       public List<Recipe> GetAll()
        {
           return _dataContext.Recipes.ToList();
        }
      public  Recipe GetById(int id)
        {
            return _dataContext.Recipes.FirstOrDefault(x => x.Id==id); 
        }
     public   Recipe AddRecipe(string name, string description, string pic, string level, string duration, int amount, string instructions, int UserId)
        {
            Recipe recipe = new Recipe
            {
                Id = _dataContext.Recipes.Count() + 1,
                Name = name,
                Description = description,
                Pic = pic,
                Level = level,
                Duration = duration,
                Amount = amount,
                Instructions = instructions,
                UserId = UserId
            };
            _dataContext.Recipes.Add(recipe);
            _dataContext.SaveChanges();
            return recipe;
        }

      
    }
}
