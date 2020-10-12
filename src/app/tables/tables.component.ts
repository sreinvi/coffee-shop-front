import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TablePayload} from '../dto/responses/table-payload';
import {TableService} from '../services/table.service';
import {TableResponse} from '../dto/responses/TableResponse';

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
  ) {}

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(){
    this.tableService.getTables().subscribe( (response: TableResponse) => {
      console.log(response.data);
      this.tables = response.data;
    });
  }
}
