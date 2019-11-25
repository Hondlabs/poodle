import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  width: number;
  height: number;

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

  setSize() {

    this.globalService.setWidthInput(this.width);
    this.globalService.setHeightInput(this.height);
  }
}
