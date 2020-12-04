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

  reportsList: Report[];

  reportedMessagesList: Message[];

  bansList: Ban[];

  constructor(private service: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin(password: string) {
    if (password !== '') {
      this.service.doAdminAuth(password)
      .subscribe(response => {
        this.loginSuccessful = this.service.isAuthed();
        console.log(this.loginSuccessful);
        this.currentView = 'admin_buttons';
      });
    }
  }

  viewReports() {
    console.log('viewing reports');
    this.service.getReports()
      .subscribe(response => {
        if (response.success) {
          this.reportsList = response.data;
        }
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
          if (response.success) {
            this.reportedMessagesList = response.data;
          }
        });
      this.showingReportedMessages = true;
    }
  }

  viewBans() {
    console.log('viewing bans');
    this.service.getBans()
      .subscribe(response => {
        if (response.success) {
          this.bansList = response.data;
        }
      });
    this.currentView = 'bans';
  }

  banUser(reportId: string, reason: string) {
    if (reason !== '') {
      console.log(reportId);
      this.service.banUser(reportId, reason)
      .subscribe(response => {
        console.log(response);
      });
    }
  }

  unbanUser(ip: string) {
    this.service.unbanUser(ip)
      .subscribe(response => {
        console.log(response);
      });
  }

}
