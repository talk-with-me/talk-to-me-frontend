import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private service: AppService) {
    // example implementation
    // this.service.messageEmitter.subscribe(msg => this.messages.push(msg));
  }

  ngOnInit() {
  }

}
