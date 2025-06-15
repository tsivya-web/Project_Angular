using CORE.service;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientRecipeController : ControllerBase
    {
        IIngredient_RecipeService _recipeService;
        public IngredientRecipeController(IIngredient_RecipeService s)
        {
            _recipeService = s;
        }
        // GET: api/<IngredientRecipeController>
        [HttpGet("{id}")]
        public List<Ingredient> GetIngredientRecipe(int id)
        {
            return _recipeService.GetIngredientRecipe(id);  
        }

        [HttpGet("{idRecipe}/{idIngredient}")]
        public IngredientRecipe getById(int idRecipe, int idIngredient)
        {
            return _recipeService.getById(idRecipe, idIngredient);

        }



        // POST api/<IngredientRecipeController>
        [HttpPost("{id}")]
        public void Post(int id,[FromBody] Dictionary<int, string> intIngredient)
        {
            _recipeService.AddIngredient(id, intIngredient);
        }


       
    }
}
