import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UsersModel } from '../users.model';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  id: String;
  user: UsersModel[];

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    console.log('Called Constructor');
    this.route.params.subscribe(params => {
        this.id = params['id'];
    });
    console.log(this.id);
  }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe((data)=>{
      this.user = JSON.parse(JSON.stringify(data));
    })
  }

}
