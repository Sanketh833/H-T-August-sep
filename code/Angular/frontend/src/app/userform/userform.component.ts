import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  user = {
    name: 'sanketh',
    age: 20,
    dob: new Date()
  }

  users: any[] = [];
  constructor(public userService: UserserviceService) { }

  deleteUser(id:Number){

    const observable=this.userService.deleteUser(id);
    observable.subscribe((responseBody: any)=>{
      console.log(responseBody);
      console.log("deleted")
    },
    (error:any)=>{
      console.log(error);
      
    }
    );
  }

  saveUser() {
    this.user.dob = new Date(this.user.dob)
    console.log('clicked');
    const observable = this.userService.save(this.user);
    observable.subscribe((responseBody: any) => {
      console.log(responseBody);
      this.users.push(responseBody);
    },
      (error: any) => {

        console.log(error);
      }

    );
  }

  ngOnInit(): void {
    const Observable = this.userService.getUsers();
    Observable.subscribe((usersFromServer:any)=> {
      this.users=usersFromServer;
    })

    
  }

}
