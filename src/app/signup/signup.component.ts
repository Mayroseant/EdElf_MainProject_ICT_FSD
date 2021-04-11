import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../users.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private userService: UserService, private router: Router) { }

  user = new UsersModel(null, null, null, null, null, null, null);

  ngOnInit(): void {
  }
  AddUser(){
    this.userService.newUser(this.user);
    alert("Successful Registration");
    this.router.navigate(['/login']);
  }

}
