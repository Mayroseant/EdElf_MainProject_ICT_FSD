import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../items.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  items: ItemsModel[];

  showSubmissions: boolean = false;

  constructor(private itemService: ItemService, private router: Router) { }

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
