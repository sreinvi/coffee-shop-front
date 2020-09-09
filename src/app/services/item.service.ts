import { Injectable } from '@angular/core';
import {ItemsResponse} from '../dto/ItemsResponse';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  getItems(): Observable<ItemsResponse>
  {
    const fullItemsUrl = 'test_url';
    // let full_feed_url :string = this.appConfig.api_url + this.feed_url;
    return this.httpClient.get<ItemsResponse>(fullItemsUrl );
  }
}
