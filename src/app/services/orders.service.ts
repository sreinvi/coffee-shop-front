import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';
import {TableResponse} from '../dto/responses/TableResponse';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private appConfig: AppConfig, private httpClient: HttpClient){}

  getUnpaidTableOrders(table_id:number)
  {
    const fullOrdersUrl: string = this.appConfig.api_url + 'orders/table_unpaid/' + table_id;
    return this.httpClient.get<any>(fullOrdersUrl);
  }
}
