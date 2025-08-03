using CORE.service;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IUserService _userService;
        public IActionResult Get()
        {
            return Ok("Server is running!");
        }

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: api/<UserController>
        [HttpGet]
        public List<User >GetAll()
        {
            return _userService.GetAll();
        }

        // GET api/<UserController>/5
        [HttpGet("{email}/{password}")]
        public ActionResult<User> Get(string email,string password)
        {
           var user=  _userService.GetUser(email,password);
            if (user == null)
                return NotFound("user not found");
            else
            {
                return Ok(user);
            }
        }

        // POST api/<UserController>
        [HttpPost]
        public User Post([FromBody]User u)
        {
         return    _userService.AddUser( u);
        }

      
    }
}
