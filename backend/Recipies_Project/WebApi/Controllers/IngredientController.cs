using CORE.repositories;
using CORE.service;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        IIngredientService _ingredientService;
        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        // GET: api/<Ingred>
        [HttpGet]
        public List<Ingredient> GetAll()
        {
            return _ingredientService.GetAll();
        }

     
   

        // POST api/<Ingred>
        [HttpPost("{value}")]
        public void Post(string  value)
        {
            _ingredientService.AddIngredient(value);
        }

    
      
    }
}
