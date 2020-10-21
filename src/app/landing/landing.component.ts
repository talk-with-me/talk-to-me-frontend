import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'ttm-landing',
  template: `
    <nav align="center">
      <a routerLink="/chat">Chat</a>
    </nav>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private service: AppService) {
  }

  ngOnInit() {
  }

}
