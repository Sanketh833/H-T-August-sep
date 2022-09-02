import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any[] = [];
  constructor(public userService: UserserviceService) { }

  ngOnInit(): void {
    const Observable = this.userService.getUsers();
    Observable.subscribe((usersFromServer:any)=> {
      this.users=usersFromServer;
    })

    
  }
}
