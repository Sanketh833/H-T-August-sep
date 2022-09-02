import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = "http://localhost:8090/user"

@Injectable({
  providedIn: 'root'
})


export class UserserviceService {
  save(user: any) {
    return this.Http.post(URL, user);

  }

  deleteUser(id:any){
    return this.Http.delete(URL+"/"+id);
  }

  getUsers()
  {

    return this.Http.get(URL);
  }

  constructor(public Http: HttpClient) { }
}
