import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUser(id:any){
    return this.http.get("https://edelf.herokuapp.com/readuser"+id);
  }
  getUsers(){
    return this.http.get("https://edelf.herokuapp.com/users");
  }
  newUser(user: any){
    return this.http.post("https://edelf.herokuapp.com/register", {"user" :user})
    .subscribe(data => {console.log(data)});
  }
  deleteUser(user: any)
  {
    return this.http.delete("https://edelf.herokuapp.com/deleteuser/"+user);
  }

}
