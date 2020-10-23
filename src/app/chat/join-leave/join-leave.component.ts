import { Component, OnInit, Input } from '@angular/core';
import { JoinLeaveItem } from '../chat-items';

@Component({
  selector: 'ttm-join-leave',
  template: `
    isJoin: **{{ item.isJoin }}**
  `,
})
export class JoinLeaveComponent implements OnInit {
  @Input() item: JoinLeaveItem;

  constructor() { }

  ngOnInit() { }

}
