import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ItemModalComponent, ItemModalContent} from './modals/item-modal/item-modal-component';
import {ReactiveFormsModule} from '@angular/forms';
import {JsonAppConfigService} from './config/json-app-config.service';
import { AppConfig } from './config/app-config';
import { TablesComponent } from './tables/tables.component';
import {TableModalComponent, TableModalContent} from './modals/table-modal/table-modal-component';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    ItemModalComponent,
    ItemModalContent,
    TablesComponent,
    TableModalComponent,
    TableModalContent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'tables', component: TablesComponent},
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
