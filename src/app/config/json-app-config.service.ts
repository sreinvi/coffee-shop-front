import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from './app-config';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig {

  constructor(private http: HttpClient) {
    super();
  }

  // This function needs to return a promise
  load() {
    return this.http.get<AppConfig>('../config.json')
      .toPromise()
      .then(data => {
        this.api_url = data.api_url;
      })
      .catch(() => {
        console.error('Could not load configuration');
      });
  }
}
