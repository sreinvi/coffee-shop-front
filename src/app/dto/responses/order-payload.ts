import {ItemPayload} from './item-payload';

export class OrderPayload{
  id:number;
  item:ItemPayload;
  table_id:number;
  delivered:boolean;
  payed:boolean;
}
