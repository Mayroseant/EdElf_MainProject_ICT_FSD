import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {role: '',
          email: '',
          password: ''};

  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  userVerify(){
    this._auth.loginUser(this.User)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin'])
      },
      err => {
        console.log(err);
        this._router.navigate(['/admin'])
      }
    ) 
    alert("Successful Login");
  }

}
