import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'talk-to-me-frontend';
  imgUrl: string;

  ngOnInit() {
    this.imgUrl = this.getImgURL();
  }

  getImgURL() {
    const randomNum = this.getRandom();
    return `https://picsum.photos/1920/1080?random=${randomNum}`;
  }

  getRandom() {
    return Math.random();
  }

}
