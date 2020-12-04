import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { Message } from '../schemas/api';
import { Ban, Report } from '../schemas/admin';

@Component({
  selector: 'ttm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginSuccessful = false;
  currentView: string;
  showingReportedMessages = false;

  reportsList: Report[] = [
    { reporter:'me', reporter_ip:'local', reported:'you', reported_ip:'yours', reason:'test', room_id:'1234' },
    { reporter:'you', reporter_ip:'yours', reported:'me', reported_ip:'local', reason:'test2', room_id:'5678' } 
  ]

  reportedMessagesList: Message[] = [
    {_id:'blah', room_id:'1234', author:'me', nonce:'huh', content:'you are bad', timestamp:'yesterday'}
  ]

  bansList: Ban[] = [
    {ip:'yours', reason:'bad boy', date:'yesterday'},
    {ip:'yours', reason:'bad boy bad boy bad boy bad boy bad boy bad boy', date:'yesterday'}
  ]

  constructor(private service: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin(password: string) {
    if (password != '') {
      this.service.doAdminAuth(password);
      this.loginSuccessful = this.service.isAuthed();
      console.log(this.loginSuccessful);
      // Comment out below line when authorization is functional
      this.loginSuccessful = true;
      this.currentView = 'admin_buttons'; 
    }
  }

  viewReports() {
    console.log('viewing reports');
    this.service.getReports()
      .subscribe(response => {
        console.log(response);
      });
    this.currentView = 'reports';
  }

  viewReportedMessages(id: string) {
    if (this.showingReportedMessages) {
      this.showingReportedMessages = false;
    } else {
      console.log('viewing reported messages');
      this.service.getReportedMessages(id)
        .subscribe(response => {
          console.log(response);
        });
      this.showingReportedMessages = true;
    }
  }

  viewBans() {
    console.log('viewing bans');
    this.service.getBans()
      .subscribe(response => {
        console.log(response);
      });
    this.currentView = 'bans';
  }

  banUser(room_id: string, reason: string) {
    if (reason != '') {
      console.log(room_id);
      this.service.banUser(room_id, reason);
    }
  }

  unbanUser(ip: string) {
    this.service.unbanUser(ip);
  }

}
