using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public class IngredientRepository : IIngredientRepository
    {
        DataContext _context;
        public IngredientRepository(DataContext context)
        {
            _context = context;
        }
        //{
        public List<Ingredient> GetAll()
        {
            return _context.Ingredients.ToList();
        }
        public void AddIngredient(string name)
        {

            var existingIngredient = _context.Ingredients.FirstOrDefault(i => i.Name == name);

            if (existingIngredient == null)
            {
                // אם המצרך לא קיים, צור חדש והוסף אותו
                var newIngredient = new Ingredient()
                {
                    Id = _context.Ingredients.Count() + 1,
                    Name = name
                };

                _context.Ingredients.Add(newIngredient);
                _context.SaveChanges();
            }
            else
            {
                // אם המצרך כבר קיים, אתה יכול לבחור מה לעשות
                Console.WriteLine($"המצרך '{name}' כבר קיים במערכת.");

            }
        }
    }
}
