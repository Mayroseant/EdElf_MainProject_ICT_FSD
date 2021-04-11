import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  items: ItemsModel[];

  constructor(private router:Router, private itemService: ItemService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data)=>{
      this.items = JSON.parse(JSON.stringify(data));
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

}
