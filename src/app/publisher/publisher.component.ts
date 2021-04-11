import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

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
