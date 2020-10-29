import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../services/orders.service';
import {TableResponse} from '../dto/responses/TableResponse';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    let table_id = +this.route.snapshot.paramMap.get('table_id');
    this.loadOrders(table_id);
  }

  loadOrders(table_id:number)
  {
    this.ordersService.getUnpaidTableOrders(table_id).subscribe( (response: any) => {
      console.dir(response);
    });
  }

}
