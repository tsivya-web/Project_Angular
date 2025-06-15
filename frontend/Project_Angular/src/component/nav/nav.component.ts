import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private userservice:UserService){

  }
 

getConnected(){
   if (typeof window !== 'undefined') 
  return localStorage.getItem('connected')==='true'
else
return false
}

  

}
