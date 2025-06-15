import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User={
    id:0,
  fName:"",
  lName:"",
  email:"",
  password:""}

  constructor(private userService:UserService,private router:Router){
       
  }


  addUser( ){
this.userService.add(this.user)
.subscribe((data)=>{
    debugger  
    alert("נרשמת בהצלחה!!")
    this.userService.currentUser=data
this.userService.connected=true
localStorage.setItem('connected','true')
     this.router.navigate(['listUser'])
    },
  err=>{
    debugger
    console.log(err);
  });

}
}
