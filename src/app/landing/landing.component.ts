import { Component, OnInit } from '@angular/core';
import { AppService, QueueType } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ttm-landing',
  template: `
    <div class="landing_buttons">
      <ul>
        <!-- <li><a routerLink="/chat">Be Heard</a></li> -->
        <!-- <li><a routerLink="/chat">Listen</a></li> -->
        <li><a routerLink="/chat">Talk</a></li>
      </ul>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // whether or not the user is currently in queue
  inQueue = false;
  // the time the user last joined a queue (to display time in queue)
  joinedQueueAt: Date;

  constructor(private service: AppService, private router: Router) {
    this.service.queueCompleteEmitter.subscribe(event => this.onQueueComplete(event));
  }

  ngOnInit() {
    this.service.ensureAuth();
  }

  // actions
  joinQueue(queueType: QueueType) {
    this.service.enterQueue(queueType)
      .subscribe(result => {
        // todo what does this response look like
        this.inQueue = true;
        this.joinedQueueAt = new Date();
      });
  }

  leaveQueue() {
    // todo notify the server
    this.inQueue = false;
    this.joinedQueueAt = null;
  }

  // event listeners
  onQueueComplete(event: any) {
    this.service.joinRoom(event.roomId) // todo what does this event look like
      .subscribe(result => {
        // todo what does this response look like
        this.router.navigate(['/chat'], { state: { roomId: event.roomId } });
      });
  }
}
