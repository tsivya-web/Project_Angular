using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public interface IUserRepository
    {
        User GetUser(string email, string password);
  
        User AddUser(User u);
        List<User> GetAll();

    }
}
