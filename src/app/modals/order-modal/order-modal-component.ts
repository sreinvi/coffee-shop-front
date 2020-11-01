import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {OrdersService} from '../../services/orders.service';
import {OrderDefaultValuesResponse} from '../../dto/responses/order-default-values-response';
import {OrderPayload} from '../../dto/responses/order-payload';
import {NewOrderRequest} from '../../dto/responses/NewOrderRequest';

@Component({
  selector: 'order-modal-content',
  templateUrl: './order-modal-content.html'
})
export class OrderModalContent {
  table_id:number;
  orderDefaultValues: OrderDefaultValuesResponse;
  saveOrderForm: FormGroup;
  select_item = new FormControl('');

  constructor(public activeModal: NgbActiveModal, private router: Router, private ordersService: OrdersService)
  {
    this.saveOrderForm = new FormGroup({
      select_item: this.select_item,
    });
    this.orderDefaultValues = {
      items:null
    }
  }

  loadData(id:number)
  {
    this.loadDefault();
  }

  loadDefault()
  {
    this.ordersService.getDefaultValues().subscribe( response => {
      this.orderDefaultValues = response.data;
    },error =>{
      alert(error);
    })
  }
  save(){
    let orderPayload = new OrderPayload();
    orderPayload.item_id = this.select_item.value;
    orderPayload.table_id = this.table_id;
    let orders:OrderPayload[];
    orders = [orderPayload];
    let newOrders = new NewOrderRequest();
    newOrders.orders = orders
    this.ordersService.newOrder(newOrders).subscribe( ()=>{
      window.location.reload();
    }, error => {

      alert(error);
    });
  }

}

@Component({
  selector: 'order-modal',
  templateUrl: './order-modal-component.html'
})
export class OrderModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(OrderModalContent);
  }
}
