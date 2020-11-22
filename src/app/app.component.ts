import { Component } from '@angular/core';

@Component({
  selector: 'ttm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talk-to-me-frontend';
  imgURL: string;

  ngOnInit() {
    this.imgURL = this.getImgURL();
  }

  getImgURL() {
    let random_num = this.getRandom();
    return `https://picsum.photos/1920/1080?random=${random_num}`
  }

  getRandom() {
    return Math.random();
  }

}
