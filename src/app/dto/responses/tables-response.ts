import {TablePayload} from './table-payload';
import Table = WebAssembly.Table;

// export class TablesResponse{
//   content: Array<TablePayload>;
// }
export class TablesResponse{
  success: boolean;
  message: string;
  data:TablePayload;
}
