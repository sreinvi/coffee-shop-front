import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ItemPayload} from '../dto/responses/item-payload';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {ItemResponse} from '../dto/responses/ItemResponse';
import {AppConfig} from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor( private appConfig: AppConfig, private httpClient: HttpClient){}

  getItems(): Observable<PageableItemsResponse>
  {
    const fullItemsUrl: string = this.appConfig.api_url + 'item/all';
    return this.httpClient.get<PageableItemsResponse>(fullItemsUrl );
  }

  getItem(item_id:number)
  {
    const fullItemsUrl: string = this.appConfig.api_url + 'item/'+item_id;
    return this.httpClient.get<ItemResponse>(fullItemsUrl);
  }

  newItem(itemPayload:ItemPayload)
  {
    const fullItemsUrl:string = this.appConfig.api_url + 'item/create';
    return this.httpClient.post(fullItemsUrl, itemPayload);
  }

  updateItem(itemPayload:ItemPayload)
  {
    const fullItemsUrl:string = this.appConfig.api_url + 'item/update';
    return this.httpClient.put(fullItemsUrl, itemPayload);
  }

  deleteItem(item_id:number)
  {
    let full_delete_url :string = this.appConfig.api_url + 'item/delete/' + item_id;
    return this.httpClient.delete<any>(full_delete_url);
  }
}
