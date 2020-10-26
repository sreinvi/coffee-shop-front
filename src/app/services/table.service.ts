import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';
import {TableResponse} from '../dto/responses/TableResponse';
import {TablesResponse} from '../dto/responses/tables-response';
import {TablePayload} from '../dto/responses/table-payload';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor( private appConfig: AppConfig, private httpClient: HttpClient){}

  getTables()
  {
    const fullTablesUrl: string = this.appConfig.api_url + 'tables/all';
    return this.httpClient.get<TableResponse>(fullTablesUrl );
  }

  getTable(table_id:number)
  {
    const fullTablesUrl: string = this.appConfig.api_url + 'tables/' + table_id;
    return this.httpClient.get<TablesResponse>(fullTablesUrl);
  }

  updateTable(tablePayload: TablePayload) {
    const fullTablesUrl:string = this.appConfig.api_url + 'tables/update';
    return this.httpClient.put(fullTablesUrl, tablePayload);
  }

  deleteTable(table_id:number)
  {
    let fullTablesUrl :string = this.appConfig.api_url + 'tables/delete/' + table_id;
    return this.httpClient.delete<any>(fullTablesUrl);
  }

  newTable(tablePayload: TablePayload) {
    const fullTablesUrl:string = this.appConfig.api_url + 'tables/create';
    return this.httpClient.post(fullTablesUrl, tablePayload);
  }
}
