import { Component, OnInit, Input } from '@angular/core';
import { JoinLeaveItem } from '../chat-items';

@Component({
  selector: 'ttm-join-leave',
  template: `
    {{showMessage}}
  `,
})
export class JoinLeaveComponent implements OnInit {
  @Input() item: JoinLeaveItem;

  showMessage = 'Finding room...';

  constructor() { }

  ngOnInit() {
    if (this.item.isJoin) {
      this.showMessage = 'Connected to another person'
    }
    if (this.item.disconnected) {
      this.showMessage = 'Disconnected from other person, please click home to chat again!'
    }
  }

}
