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
    age: 20
  }

  users: any[] = [];
  constructor(public userService: UserserviceService) { }

  saveUser() {

    console.log('clicked');
    const promise = this.userService.save(this.user);
    promise.subscribe((responseBody: any) => {
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
