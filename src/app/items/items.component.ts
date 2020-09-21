import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {ItemsResponse} from '../dto/responses/items-response';
import {ItemModalContent} from '../modals/item-modal/item-modal-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: ItemsResponse;
  constructor(private router: Router, private itemService: ItemService, private modalService:NgbModal) {

  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe( (data: ItemsResponse) => {
      this.items = data;
    });
  }

  editItem(id: number) {
    const ref = this.modalService.open(ItemModalContent)
    ref.componentInstance.loadData(id);
  }

  deleteItem(item_id: number) {
    this.itemService.deleteItem(item_id).subscribe( (data:any) =>{
      this.loadItems();
    },(err:any)=>{
      alert("Something went wrong")
    });
  }


}
