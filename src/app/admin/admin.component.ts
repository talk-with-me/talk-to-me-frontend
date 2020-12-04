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

  constructor(private service: AdminService, private router: Router) {
  }

  ngOnInit() {
    if (this.service.isAuthed()) {
      this.loginSuccessful = this.service.isAuthed();
      console.log('Login successful?: ', this.loginSuccessful);
    }
  }

  attemptLogin(password: string) {
    if (password !== '') {
      this.service.doAdminAuth(password)
      .subscribe(response => {
        this.loginSuccessful = this.service.isAuthed();
        console.log('Login successful?: ', this.loginSuccessful);
      });
    }
  }
}
