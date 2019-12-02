import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.sass']
})
export class EditingAreaComponent implements OnInit {

  solid: boolean;

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  setStyle() {

    this.globalService.setStyle(this.solid);
  }

}
