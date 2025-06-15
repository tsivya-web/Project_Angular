using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CORE.repositories;
using WebApi.Entities;

namespace CORE.service
{
    public class RecipeService:IRecipeService
    {
        IRecipiesRepository _recipiesRepository;
        public RecipeService(IRecipiesRepository recipiesRepository)
        {
            _recipiesRepository = recipiesRepository;
        }
      public  List<Recipe> GetAll()
        {
            return _recipiesRepository.GetAll();
        }
        public Recipe GetById(int id)
        {
         return   _recipiesRepository.GetById(id);
        }

       public Recipe AddRecipe(string name, string description, string pic, string level, string duration, int amount, string instructions, int UserId)
        {
          return  _recipiesRepository.AddRecipe(name, description, pic, level, duration, amount, instructions, UserId);
        }
    }
}
