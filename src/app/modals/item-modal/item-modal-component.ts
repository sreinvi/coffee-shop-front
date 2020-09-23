import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {ItemPayload} from '../../dto/responses/item-payload';
import {ItemService} from '../../services/item.service';
import {ItemsResponse} from '../../dto/responses/items-response';
import {ItemResponse} from '../../dto/responses/ItemResponse';

@Component({
  selector: 'item-modal-content',
  templateUrl: './item-modal-content.html'
})
export class ItemModalContent {

  itemPayload: ItemPayload;
  saveItemForm: FormGroup;
  item = new FormControl('');
  price = new FormControl('');

  constructor(public activeModal: NgbActiveModal, private router: Router, private itemService: ItemService)
  {
    this.saveItemForm = new FormGroup({
      item: this.item,
      price: this.price
    });

    this.itemPayload = {
      id: null,
      item: '',
      price: null,
      active:null,
      image_url:null
    }
  }

  loadData(id:number)
  {
    this.itemService.getItem(id).subscribe( (response:ItemResponse) =>{
      this.itemPayload.id = response.data.id;
      this.saveItemForm.controls.item.setValue(response.data.item);
      this.saveItemForm.controls.price.setValue(response.data.price);
    },(error:any)=>{
      alert(error);
    });
  }

  update()
  {
    this.itemPayload.item = this.saveItemForm.get('item').value;
    this.itemPayload.price = this.saveItemForm.get('price').value;
    this.itemService.updateItem(this.itemPayload).subscribe( data=>{
      window.location.reload();
    },error =>{
      alert(error);
    });
  }

  save(){
    if(this.itemPayload.id > 0){
      this.update();
      return;
    }
    this.itemPayload.item = this.saveItemForm.get('item').value;
    this.itemPayload.price = (this.saveItemForm.get('price').value * 100);
    this.itemService.newItem(this.itemPayload).subscribe( ()=>{
      window.location.reload();
    }, error => {
      alert(error);
    });
  }

}

@Component({
  selector: 'item-modal',
  templateUrl: './item-modal-component.html'
})
export class ItemModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(ItemModalContent);
  }


}
