import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {ItemsResponse} from '../dto/responses/items-response';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: ItemsResponse;
  constructor(private router: Router, private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe( (data: ItemsResponse) => {
      this.items = data;
    });
  }

}
