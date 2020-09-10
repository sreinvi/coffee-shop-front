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
    // let full_feed_url :string = this.appConfig.api_url + this.feed_url;
    return this.httpClient.get<ItemsResponse>(fullItemsUrl );
  }
}
