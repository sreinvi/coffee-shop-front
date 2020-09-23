import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {ItemModalContent} from '../modals/item-modal/item-modal-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {ItemPayload} from '../dto/responses/item-payload';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<ItemPayload>;
  constructor(private router: Router, private itemService: ItemService, private modalService:NgbModal) {

  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe( (response: PageableItemsResponse) => {
      this.items = response.data.content;
    });
  }

  editItem(id: number) {
    const activeModal = this.modalService.open(ItemModalContent)
    activeModal.componentInstance.loadData(id);
    activeModal.result.then((response) => {
      this.loadItems();
    }, (reason) => {
      alert("there was an error");
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
