import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {

  items: ItemsModel[];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data)=>{
      this.items = JSON.parse(JSON.stringify(data));
    })
  }
  readItem(id:any){
    this.router.navigate(['read/', id]);
  }

}
