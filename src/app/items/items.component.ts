import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {ItemModalContent} from '../modals/item-modal/item-modal-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PageableItemsResponse} from '../dto/responses/pageable-items-response';
import {ItemPayload} from '../dto/responses/item-payload';
import {UploadImageService} from '../services/upload-image.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<ItemPayload>;
  constructor(
    private router: Router,
    private itemService: ItemService,
    private uploadImageService:UploadImageService,
    private modalService:NgbModal
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe( (response: PageableItemsResponse) => {
      this.items = response.data.content;
    });
  }

  onFileSelected(event: Event, item_id:number){
    let fd = new FormData();

    // @ts-ignore
    fd.append('file',event.target.files[0], event.target.files[0].name);
    // @ts-ignore
    fd.append('item_id',item_id);
    this.uploadImageService.uploadImage(fd).subscribe( (response:any) =>{
      this.loadItems();
    },(err:any)=>{
      console.log(err);
      alert("Something went wrong")
    });
  }

  editItem(id: number) {
    const activeModal = this.modalService.open(ItemModalContent)
    activeModal.componentInstance.loadData(id);
    activeModal.result.then((response) => {
      this.loadItems();
    },(err:any)=>{
      alert("there was an error");
    });
  }

  deleteItem(item_id: number) {
    this.itemService.deleteItem(item_id).subscribe( (response:any) =>{
      this.loadItems();
    },(err:any)=>{
      alert("Something went wrong")
    });
  }


}
interface HTMLInputEvent extends Event {
  files: ;
}
