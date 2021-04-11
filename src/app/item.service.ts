import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  item= {
    itemTitle: '',
    itemAbstract: '',
    itemContent: '',
    comments_author: '',
    comments_editor: '',
    comments_reviewer: ''};

  constructor( private http: HttpClient) { }

  getItem(id: any){
    return this.http.get("https://edelf.herokuapp.com/read"+id);
  }
  takeItem(id: any){
    return this.http.get("https://edelf.herokuapp.com/"+id);
  }
  getItems(){
    return this.http.get("https://edelf.herokuapp.com/items");
  }
  newItem(item: any){
    return this.http.post("https://edelf.herokuapp.com/add", {"item" :item})
    .subscribe(data => {console.log(data)});
  }
  deleteItem(item: any)
  {
    return this.http.delete("https://edelf.herokuapp.com/delete/"+item);
  }
  editItem(item: any)
  {
    console.log('client update');
    return this.http.put("https://edelf.herokuapp.com/edit",item)
    .subscribe(data =>{console.log(data)});
  }

}