import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';

import htmltoimage from 'html-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  setImage(event: any) {

    (event.target as HTMLElement).innerHTML = '<img style="width:100%" src="' + this.globalService.getSelectedImage() + '">'
  }

  exportImage() {

    var element = document.getElementById('to-png');

    htmltoimage.toBlob(element).then(function (blob) {

      saveAs(blob, "export.png");

    });
  }
}