import { Component, Input, OnInit } from '@angular/core';
import { MsgItem } from './msg-item';

@Component({
  selector: 'ttm-msg-item',
  template: `
    {{ item.msg }}
  `
})
export class MsgItemComponent implements OnInit {
  @Input() item: MsgItem;

  constructor() { }

  ngOnInit() { }

}
