import { Injectable } from '@angular/core';
import {ItemsResponse} from '../dto/responses/items-response';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ItemPayload} from '../dto/responses/item-payload';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {ItemResponse} from '../dto/responses/ItemResponse';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  getItems(): Observable<PageableItemsResponse>
  {
    const fullItemsUrl = 'http://localhost:8080/api/item/all';
    return this.httpClient.get<PageableItemsResponse>(fullItemsUrl );
  }

  getItem(item_id:number)
  {
    const fullItemsUrl = 'http://localhost:8080/api/item/'+item_id;
    return this.httpClient.get<ItemResponse>(fullItemsUrl);
  }

  newItem(itemPayload:ItemPayload)
  {
    const fullItemsUrl = 'http://localhost:8080/api/item/create';
    return this.httpClient.post(fullItemsUrl, itemPayload);
  }

  updateItem(itemPayload:ItemPayload)
  {
    const fullItemsUrl = 'http://localhost:8080/api/item/update';
    return this.httpClient.put(fullItemsUrl, itemPayload);
  }

  deleteItem(item_id:number)
  {
    let full_delete_url :string = 'http://localhost:8080/api/item/delete/' + item_id;
    return this.httpClient.delete<any>(full_delete_url);
  }
}
