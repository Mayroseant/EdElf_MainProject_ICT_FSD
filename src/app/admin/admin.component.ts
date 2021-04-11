import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { UsersModel } from '../users.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: ItemsModel[];
  users: UsersModel[];

  constructor(private itemService: ItemService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data)=>{
      this.items = JSON.parse(JSON.stringify(data));
    })

    this.userService.getUsers().subscribe((data)=>{
      this.users = JSON.parse(JSON.stringify(data));
    })
  }
  readItem(id:any){
    this.router.navigate(['read/', id]);
  }
  editItem(item:any)
  {
    localStorage.setItem("editItemId", item._id.toString());
    this.router.navigate(['edit']);
  }
  deleteItem(item:any)
  {
    this.itemService.deleteItem(item._id)
      .subscribe((data) => {
        this.items = this.items.filter(p => p !== item);
      })
  }
  readUser(id:any){
    this.router.navigate(['readuser/', id]);
  }
  editUser(id:any)
  {
    this.router.navigate(['edituser/', id]);
  }
  deleteUser(user:any)
  {
    this.userService.deleteUser(user._id)
      .subscribe((data) => {
        this.users = this.users.filter(p => p !== user);
      })
  }

}