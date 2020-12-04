import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Message } from '../../schemas/api';
import { Report } from '../../schemas/admin';

@Component({
  selector: 'ttm-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  showingReportedMessages = false;
  userBanned = false;

  reportsList: Report[];

  reportedMessagesList: Message[];
  messagesStatus: string;

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
    if (this.service.isAuthed()) {
      console.log('viewing reports');
      this.service.getReports()
        .subscribe(response => {
          if (response.success) {
            this.reportsList = response.data;
          }
        });
    } else {
      this.router.navigate(['/admin']);
    }
  }

  viewReportedMessages(id: string) {
    if (this.service.isAuthed()) {
      if (this.showingReportedMessages) {
        this.showingReportedMessages = false;
      } else {
        console.log('viewing reported messages');
        this.service.getReportedMessages(id)
          .subscribe(response => {
            if (response.success) {
              this.reportedMessagesList = response.data;
              if (this.reportedMessagesList.length === 0) {
                this.showingReportedMessages = false;
                console.log('No messages to show');
              } else {
                this.showingReportedMessages = true;
              }
            }
          });
      }
    } else {
      this.router.navigate(['/admin']);
    }
  }

  banUser(roomId: string, reason: string) {
    if (this.service.isAuthed()) {
      if (reason !== '') {
        console.log(roomId);
        this.service.banUser(roomId, reason)
        .subscribe(response => {
          console.log(response);
          this.userBanned = true;
        });
      }
    } else {
      this.router.navigate(['/admin']);
    }
  }

}
