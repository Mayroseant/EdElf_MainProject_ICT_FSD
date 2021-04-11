import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item= {
    itemTitle :'',
    itemAbstract:'',
    itemContent:'',
    comments_author:'',
    comments_reviewer:'',
    comments_editor:''
  }

  constructor(private router:Router,private itemService:ItemService) { }

  ngOnInit(): void {
    let itemId = localStorage.getItem("editItemId");
    this.itemService.takeItem(itemId).subscribe((data)=>{
      this.item=JSON.parse(JSON.stringify(data));
  })
  }
  editItem()
  {    
    this.itemService.editItem(this.item);   
    alert("Success");
    this.router.navigate(['admin']);
  }

}
