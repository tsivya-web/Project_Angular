using CORE.repositories;
using CORE.service;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        IRecipeService _recipiesService;
        public RecipeController(IRecipeService recipiesService)
        {
            _recipiesService = recipiesService;
        }
        //List<Recipe> GetAll();
        //Recipe GetById(int id);

        //void AddRecipe(string name, string description, string pic, string level, string duration, int amount, string instructions, int UserId);


        // GET: api/<RecipeController>
        [HttpGet]
        public List<Recipe> GetAll()
        {
            return _recipiesService.GetAll();
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public Recipe GetById(int id)
        {
          return _recipiesService.GetById(id);
        }

        // POST api/<RecipeController>
        [HttpPost("{name}/{description}/{pic}/{level}/{duration}/{amount}/{instructions}/{UserId}")]
        public Recipe Post(string name, string description, string pic, string level, string duration, int amount, string instructions, int UserId)
        {
           return _recipiesService.AddRecipe(name, description, pic, level, duration, amount, instructions, UserId);
        }

       
    }
}
