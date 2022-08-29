import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  user = {
    name:'sanketh',
    age:20
  }
  constructor(public userService: UserserviceService) { }

  saveUser() {

    console.log('clicked');
    const promise = this.userService.save(this.user);
    promise.subscribe(response:Response)
    
  }

  ngOnInit(): void {
  }

}
