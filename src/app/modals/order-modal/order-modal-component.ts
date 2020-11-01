import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {OrdersService} from '../../services/orders.service';
import {OrderDefaultValuesResponse} from '../../dto/responses/order-default-values-response';

@Component({
  selector: 'order-modal-content',
  templateUrl: './order-modal-content.html'
})
export class OrderModalContent {
  editRecID:number = 0;
  orderDefaultValues: OrderDefaultValuesResponse;
  saveOrderForm: FormGroup;
  select_item = new FormControl('');
  // active = new FormControl('');
  //

  constructor(public activeModal: NgbActiveModal, private router: Router, private ordersService: OrdersService)
  {
    this.saveOrderForm = new FormGroup({
      select_item: this.select_item,
    });
    //
    // this.tablePayload = {
    //   id: null,
    //   table_code:null,
    //   active:null,
    // }
  }
  //
  loadData(id:number)
  {
    this.loadDefault();
  }
  //
  // update()
  // {
  //   this.tablePayload.table_code = this.saveTableForm.get('table_code').value;
  //   this.tablePayload.active = this.saveTableForm.get('active').value;
  //   this.tableService.updateTable(this.tablePayload).subscribe( data=>{
  //     this.activeModal.close();
  //   },error =>{
  //     alert(error);
  //   });
  // }
  //
  loadDefault()
  {
    this.ordersService.getDefaultValues().subscribe( response => {
      this.orderDefaultValues = response.data;
    },error =>{
      alert(error);
    })
  }
  save(){
    console.log(this.select_item.value)
    // if(this.tablePayload.id > 0){
    //   this.update();
    //   return;
    // }
    // this.tablePayload.table_code = this.saveTableForm.get('table_code').value;
    // this.tablePayload.active = this.saveTableForm.get('active').value;
    // this.tableService.newTable(this.tablePayload).subscribe( ()=>{
    //   window.location.reload();
    // }, error => {
    //   alert(error);
    // });
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
