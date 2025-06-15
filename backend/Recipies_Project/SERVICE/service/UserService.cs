using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CORE.repositories;
using WebApi.Entities;

namespace CORE.service
{
    public class UserService:IUserService
    {
       IUserRepository _repository; 
        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }
       
      public   User GetUser(string email, string password)
        {
        return _repository.GetUser(email, password);
        }
      public   User AddUser(User u)
        {
          return   _repository.AddUser( u);
        }
      public   List<User> GetAll()
        {
            return _repository.GetAll();
        }
    }
}
