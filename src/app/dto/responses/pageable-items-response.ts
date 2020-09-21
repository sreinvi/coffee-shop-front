import {ItemsResponse} from './items-response';

export class PageableItemsResponse{
  success: boolean;
  message: string;
  data: ItemsResponse;
}
