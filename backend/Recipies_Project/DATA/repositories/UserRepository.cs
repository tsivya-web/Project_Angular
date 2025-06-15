using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entities;

namespace CORE.repositories
{
    public class UserRepository:IUserRepository
    {
        DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }

      public  User GetUser(string email, string password)
        {
            var u= _context.Users.FirstOrDefault(u => u.Email == email&&u.Password==password);
            if (u != null) return u;
            return null;

        }
       public  User AddUser(User user)
        {
            var newUser = new User
            {
              Id=_context.Users.Count()+1,
                FName = user.FName,
                LName = user.LName,
                Email = user.Email,
                Password = user.Password
            };
            _context.Users.Add(newUser);
            _context.SaveChanges();
            return newUser;
        }
      public  List<User> GetAll()
        {
            return _context.Users.ToList();
        }


    }
}
