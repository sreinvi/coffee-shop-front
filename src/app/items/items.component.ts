import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {ItemsResponse} from '../dto/responses/items-response';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: ItemsResponse;
  constructor(private router: Router, private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe( (data: ItemsResponse) => {
      this.items = data;
    });
  }

  deleteItem(item_id: number) {
    this.itemService.deleteItem(item_id).subscribe( (data:any) =>{
      this.loadItems();
    },(err:any)=>{
      alert("Something went wrong")
    });
  }
}
