import { Component, Input, OnInit } from '@angular/core';
import { MsgItem } from '../chat-items';

@Component({
  selector: 'ttm-msg-item',
  templateUrl: './msg-item.component.html',
  styleUrls: ['./msg-item.component.scss'],
})
export class MsgItemComponent implements OnInit {
  @Input() item: MsgItem;

  constructor() { }

  ngOnInit() { }

}
