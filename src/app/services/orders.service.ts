import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';
import {OrderPayload} from '../dto/responses/order-payload';
import {NewOrderRequest} from '../dto/responses/NewOrderRequest';

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

  getDefaultValues()
  {
    const fullOrdersDefaultValuesUrl: string = this.appConfig.api_url + 'orders/load_default';
    return this.httpClient.get<any>(fullOrdersDefaultValuesUrl);
  }

  newOrder(created_orders: NewOrderRequest) {
    const fullCreateOrdersUrl: string = this.appConfig.api_url + 'orders/create';
    return this.httpClient.post(fullCreateOrdersUrl,created_orders);
  }

  updateOrder(updated_orders: NewOrderRequest) {
    const fullUpdateOrdersUrl: string = this.appConfig.api_url + 'orders/update';
    return this.httpClient.put(fullUpdateOrdersUrl,updated_orders);
  }

  payOrder(order_id:number) {
    const fullUpdateOrdersUrl: string = this.appConfig.api_url + 'orders/pay/' + order_id;
    return this.httpClient.put(fullUpdateOrdersUrl,null);
  }

  deliverOrder(order_id: number) {
    const fullUpdateOrdersUrl: string = this.appConfig.api_url + 'orders/deliver/' + order_id;
    return this.httpClient.put(fullUpdateOrdersUrl,null);
  }
}
