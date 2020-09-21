import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'item-modal-content',
  templateUrl: './item-modal-content.html'
})
export class ItemModalContent {

  // tweetPayload: TweetPayload;
  // addTweetForm: FormGroup;
  // tweet = new FormControl('');

  constructor(public activeModal: NgbActiveModal, private router: Router)
  {
    // this.addTweetForm = new FormGroup({
    //   tweet: this.tweet,
    // });

    // this.tweetPayload = {
    //   tweet_id: null,
    //   tweet_message: '',
    //   tweet_user_id: null
    // }
  }

  // loadData(tweetid:number)
  // {
  //   this.tweetService.getTweet(tweetid).subscribe( (data:SingleTweet) =>{
  //     this.tweetPayload.tweet_id = data.data.tweet_id;
  //     this.addTweetForm.controls.tweet.setValue(data.data.tweet_message);
  //   },(error:any)=>{
  //     alert(error);
  //   });
  // }

  update()
  {
    // this.tweetPayload.tweet_message = this.addTweetForm.get('tweet').value;
    // this.tweetService.updateTweet(this.tweetPayload).subscribe( data=>{
    //   window.location.reload();
    // },error =>{
    //   alert(error);
    // });
  }

  save(){
    // if(this.tweetPayload.tweet_id > 0){
    //   this.update();
    //   return;
    // }
    // this.tweetPayload.tweet_message = this.addTweetForm.get('tweet').value;
    // this.tweetService.newTweet(this.tweetPayload).subscribe( data=>{
    //   window.location.reload();
    // }, error => {
    //   alert(error);
    // });
  }

}

@Component({
  selector: 'item-modal',
  templateUrl: './item-modal-component.html'
})
export class ItemModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ItemModalContent);
  }


}
