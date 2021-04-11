import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UsersModel } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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
