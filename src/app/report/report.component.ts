import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'ttm-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Output() reportClosed: EventEmitter<any> = new EventEmitter<any>();

  reportSubmitted = false;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
  }

  closeReport(closeReport: boolean) {
    this.reportClosed.emit(true);
  }

  submitReport(reportText: string) {
    if (!this.reportSubmitted && reportText !== '') {
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
