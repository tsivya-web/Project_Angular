using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CORE.repositories;
using WebApi.Entities;

namespace CORE.service
{
    public class IngredientService : IIngredientService
    {
        IIngredientRepository _repository;
        public IngredientService(IIngredientRepository repository)
        {
            _repository = repository;
        }
       public List<Ingredient> GetAll()
        {
          return  _repository.GetAll();

        }

      public  void AddIngredient(string name )
        {
       _repository.AddIngredient(name);
        }
    }
}
