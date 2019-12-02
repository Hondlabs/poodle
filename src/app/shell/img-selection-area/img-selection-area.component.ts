import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-img-selection-area',
  templateUrl: './img-selection-area.component.html',
  styleUrls: ['./img-selection-area.component.sass']
})
export class ImgSelectionAreaComponent implements OnInit {

  imageURLs = [];

  constructor(public globalService: GlobalService) {

    for (let i = 0; i < 77; i++) {

      this.imageURLs.push('./../../../assets/images/content-images/' + i + ".png");
    }
  }

  ngOnInit() {
  }

  setSelected(event: any) {

    var imageElements = document.querySelectorAll('img');
    for (let i = 0; i < imageElements.length; i++) {

      imageElements[i].style.border = 'none';
    }

    event.target.style = "border: solid 2px blue; width:100%;"
  }

}
