import { Injectable } from '@angular/core';
import {AppConfig} from '../config/app-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor( private appConfig: AppConfig, private httpClient: HttpClient){}

  uploadImage(formData: FormData )
  {
    const upload_item_image_url = this.appConfig.api_url + 'upload/item';
    return this.httpClient.post(upload_item_image_url, formData);
  }
}
