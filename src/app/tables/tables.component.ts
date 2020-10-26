import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TablePayload} from '../dto/responses/table-payload';
import {TableService} from '../services/table.service';
import {TableResponse} from '../dto/responses/TableResponse';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TableModalContent} from '../modals/table-modal/table-modal-component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables: Array<TablePayload>;
  constructor(
    private router: Router,
    private tableService: TableService,
    private modalService:NgbModal
  ) {}

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(){
    this.tableService.getTables().subscribe( (response: TableResponse) => {
      this.tables = response.data;
    });
  }

  editTable(id: number) {
    const activeModal = this.modalService.open(TableModalContent)
    activeModal.componentInstance.loadData(id);
    activeModal.result.then((response) => {
      this.loadTables();
    },(err:any)=>{
      if(err === 'Cross click') return;
      alert("there was an error!!!");
    });
  }
}
