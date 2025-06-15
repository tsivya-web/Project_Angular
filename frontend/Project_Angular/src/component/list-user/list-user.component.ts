import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../interface/user';
import { CommonModule } from '@angular/common';
@Component({
    standalone: true,
  selector: 'app-list-user',
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
constructor(private userService:UserService){

}
ngOnInit(){
  this.userService.get().subscribe(
    (data)=>{
      debugger
      this.userService.arr=data;
    },
  err=>{
    debugger
    console.log(err);
  }
  )
}

getArr():User[]{
  return this.userService.arr;
}
}
