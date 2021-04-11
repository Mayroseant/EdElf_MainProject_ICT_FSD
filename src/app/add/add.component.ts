import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private itemService: ItemService, private router: Router) { }

  item = new ItemsModel(null, null, null, null, null, null);

  ngOnInit(): void {
  }

  AddItem(){
    this.itemService.newItem(this.item);
    this.router.navigate(['/admin']);
  }

}