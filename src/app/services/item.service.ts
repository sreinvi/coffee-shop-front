import { Injectable } from '@angular/core';
import {ItemsResponse} from '../dto/responses/items-response';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  getItems(): Observable<ItemsResponse>
  {
    const fullItemsUrl = 'http://localhost:8080/api/item/all';
    return this.httpClient.get<ItemsResponse>(fullItemsUrl );
  }

  deleteItem(item_id:number)
  {
    let full_delete_url :string = 'http://localhost:8080/api/item/delete/' + item_id;
    return this.httpClient.delete<any>(full_delete_url);
  }
}
