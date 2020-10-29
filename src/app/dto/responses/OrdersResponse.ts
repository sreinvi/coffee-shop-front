import {OrderPayload} from './order-payload';

export class OrdersResponse {
  success: boolean;
  message: string;
  data: Array<OrderPayload>
}
