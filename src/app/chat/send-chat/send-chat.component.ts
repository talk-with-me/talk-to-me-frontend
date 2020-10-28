import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttm-send-chat',
  template: `
    <input #inputElementRef placeholder="Type something..." (keyup.enter)="submitValue($event.target.value); $event.target.value = ''">
  `,
  styleUrls: ['./send-chat.component.scss']
})
export class SendChatComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Output() submit: EventEmitter<String> = new EventEmitter();
  title = 'default chat';

  submitValue(msg: string) {
    this.submit.emit(msg);
  }

}
