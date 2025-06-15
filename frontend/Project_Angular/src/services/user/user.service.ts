import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
url="https://localhost:7261/api/User"
currentUser:User={ id :0,
fName:"",
lName:"",
 email:"" ,
 password:"" }
connected:boolean=false
 
  constructor(private Httpc:HttpClient) { 
    // localStorage.setItem('connected','false')
    // this.connected=localStorage.getItem('connected')==='true'
  }


arr:Array<User>=new Array<User>();
   get():Observable<User[]>{
    return this.Httpc.get<User[]>(this.url);
   }
   add( user:User):Observable<User>{
  
   return  this.Httpc.post<User>(this.url,user);

   }


getUser(email: string, password: string): Observable<User> {
 
  const fullUrl = `${this.url}/${email}/${password}`;

  return this.Httpc.get<User>(fullUrl);
}


}
