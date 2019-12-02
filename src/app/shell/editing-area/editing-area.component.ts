import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.sass']
})
export class EditingAreaComponent implements OnInit {

  color = this.globalService.getStyle().color;
  solid = this.globalService.getStyle().solid;

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  setStyle() {

    console.log(this.solid);
    this.globalService.setStyle(this.color, this.solid);
  }

}
