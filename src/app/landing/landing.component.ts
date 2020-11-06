import {Component, OnInit} from '@angular/core';
import {AppService, QueueType} from '../app.service';
import {Router} from '@angular/router';
import {hasSeenPopup, rememberSeenPopup} from '../utils/popupUtils';


@Component({
  selector: 'ttm-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  seenPopup = false;

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit() {
    this.service.ensureAuth();
    if (hasSeenPopup()) {
      this.seenPopup = true;
    } else {
      this.seenPopup = false;
    }
  }

  // actions
  closePopup(dontShow: boolean) {
    this.seenPopup = true;
    if (dontShow) {
      rememberSeenPopup();
    }
  }

  joinQueue(queueType: QueueType) {
    this.service.enterQueue(queueType)
      .subscribe(result => {
        if (result.success) {
          this.router.navigate(['chat']);
        }
      });
  }
}
