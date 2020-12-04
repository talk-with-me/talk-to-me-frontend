import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Ban } from '../../schemas/admin';

@Component({
  selector: 'ttm-bans',
  templateUrl: './bans.component.html',
  styleUrls: ['./bans.component.scss']
})
export class BansComponent implements OnInit {

  bansList: Ban[];

  bansStatus: string;

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
    if (this.service.isAuthed()) {
      console.log('viewing bans');
      this.service.getBans()
        .subscribe(response => {
          if (response.success) {
            this.bansList = response.data;
            if (this.bansList.length === 0) {
              this.bansStatus = 'No bans';
            }
          }
        });
    } else {
      this.router.navigate(['/admin']);
    }
  }

  unbanUser(ip: string) {
    if (this.service.isAuthed()) {
      this.service.unbanUser(ip)
        .subscribe(response => {
          console.log(response);
        });
    } else {
      this.router.navigate(['/admin']);
    }
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

}
