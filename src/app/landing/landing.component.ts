import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'ttm-landing',
  template: `
    <div class="landing_buttons">
      <ul>
        <li><a routerLink="/chat">Be Heard</a></li>
        <li><a routerLink="/chat">Listen</a></li>
        <li><a routerLink="/chat">Talk</a></li>
      </ul>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private service: AppService) {
  }

  ngOnInit() {
  }

}
