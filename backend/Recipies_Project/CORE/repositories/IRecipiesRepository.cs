using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public interface IRecipiesRepository
    {
        List<Recipe> GetAll();
        Recipe GetById(int id);
        Recipe AddRecipe(string name, string description, string pic, string level, string duration, int amount, string instructions, int UserId);

    }
}
