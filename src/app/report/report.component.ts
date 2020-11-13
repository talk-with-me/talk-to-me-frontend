import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'ttm-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportSubmitted = false;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
  }

  closeReport(closeReport: boolean) {
    this.router.navigate(['/chat']);
  }

  submitReport(reportText: string) {
    if(!this.reportSubmitted) {
      this.reportSubmitted = true;
      this.service.reportConversation(reportText)
      .subscribe(response => {
        if (!response.success) {
          console.warn(`failed to submit report: ${response.error}`);
        }
      });
    }
  }

}
