import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {TableService} from '../../services/table.service';
import {TablePayload} from '../../dto/responses/table-payload';
import {TablesResponse} from '../../dto/responses/tables-response';

@Component({
  selector: 'table-modal-content',
  templateUrl: './table-modal-content.html'
})
export class TableModalContent {

  tablePayload: TablePayload;
  saveTableForm: FormGroup;
  table_code = new FormControl('');
  active = new FormControl('');

  constructor(public activeModal: NgbActiveModal, private router: Router, private tableService: TableService)
  {
    this.saveTableForm = new FormGroup({
      table_code: this.table_code,
      active: this.active
    });

    this.tablePayload = {
      id: null,
      table_code:null,
      active:null,
    }
  }

  loadData(id:number)
  {
    this.tableService.getTable(id).subscribe( (response:TablesResponse) =>{
      this.tablePayload.id = response.data.id;
      this.saveTableForm.controls.table_code.setValue(response.data.table_code);
      // this.saveItemForm.controls.price.setValue(response.data.price);
    },(error:any)=>{
      alert(error);
    });
  }

  update()
  {
    // this.itemPayload.item = this.saveItemForm.get('item').value;
    // this.itemPayload.price = this.saveItemForm.get('price').value;
    // this.tableService.updateItem(this.itemPayload).subscribe( data=>{
    //   this.activeModal.close();
    // },error =>{
    //   alert(error);
    // });
  }

  save(){
    // if(this.itemPayload.id > 0){
    //   this.update();
    //   return;
    // }
    // this.itemPayload.item = this.saveItemForm.get('item').value;
    // this.itemPayload.price = (this.saveItemForm.get('price').value * 100);
    // this.tableService.newItem(this.itemPayload).subscribe( ()=>{
    //   window.location.reload();
    // }, error => {
    //   alert(error);
    // });
  }

}

@Component({
  selector: 'table-modal',
  templateUrl: './table-modal-component.html'
})
export class TableModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(TableModalContent);
  }
}
