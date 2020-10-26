import {Component, OnInit} from '@angular/core';
import {AppService, QueueType} from '../app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'ttm-landing',
  template: `
    <div class="landing_buttons">
      <ul>
        <!-- <li><a (click)="joinQueue('vent')">Be Heard</a></li> -->
        <!-- <li><a (click)="joinQueue('listen')">Listen</a></li> -->
        <li><a (click)="joinQueue('talk')">Talk</a></li>
      </ul>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit() {
    this.service.ensureAuth();
  }

  // actions
  joinQueue(queueType: QueueType) {
    this.service.enterQueue(queueType)
      .subscribe(result => {
        if (result.success) {
          this.router.navigate(['chat']);
        }
      });
  }
}
