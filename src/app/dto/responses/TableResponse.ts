import {TablePayload} from './table-payload';

export class TableResponse {
  success: boolean;
  message: string;
  data: Array<TablePayload>
}
