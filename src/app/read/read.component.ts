import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { ItemsModel } from '../items.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  id: String;
  item: ItemsModel[];
  items: ItemsModel[];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router:Router) {
    console.log('Called Constructor');
    this.route.params.subscribe(params => {
        this.id = params['id'];
    });
    console.log(this.id);
   }

  ngOnInit(): void {
    this.itemService.getItem(this.id).subscribe((data)=>{
      this.item = JSON.parse(JSON.stringify(data));
    })
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
