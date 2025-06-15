using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public interface IIngredientRepository
    {
        //{
        List<Ingredient> GetAll();
        void AddIngredient(string name);
    }
}
