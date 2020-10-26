import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {TableResponse} from '../dto/responses/TableResponse';
import {ItemResponse} from '../dto/responses/ItemResponse';
import {TablesResponse} from '../dto/responses/tables-response';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor( private appConfig: AppConfig, private httpClient: HttpClient){}

  getTables()
  {
    const fullItemsUrl: string = this.appConfig.api_url + 'tables/all';
    return this.httpClient.get<TableResponse>(fullItemsUrl );
  }

  getTable(table_id:number)
  {
    const fullItemsUrl: string = this.appConfig.api_url + 'tables/' + table_id;
    return this.httpClient.get<TablesResponse>(fullItemsUrl);
  }
}
