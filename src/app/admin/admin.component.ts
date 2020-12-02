import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ttm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginSuccessful = false;
  currentView: string;

  constructor(private service: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin(password: string){
    this.service.doAdminAuth(password);
    this.loginSuccessful = this.service.isAuthed();
    this.loginSuccessful = true;
    this.currentView = "admin_buttons";
  }

  viewReports(){
    console.log('viewing reports');
    this.currentView = "reports";
  }

  viewReportedMessages(){
    console.log('viewing reported messages');
    this.currentView = "reported_messages";
  }

  viewBans(){
    console.log('viewing bans');
    this.currentView = "bans";
  }

}
