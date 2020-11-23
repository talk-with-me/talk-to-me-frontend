import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ttm-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.scss']
})
export class SendChatComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(msg: string) {
    this.submit.emit(msg);
  }

}
