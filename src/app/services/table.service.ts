import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {TableResponse} from '../dto/responses/TableResponse';

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
}
