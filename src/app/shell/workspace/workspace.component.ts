import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';

import htmltoimage from 'html-to-image';
import { saveAs } from 'file-loader';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {

  image = localStorage.getItem(0 + "");

  constructor(public globalService: GlobalService) {
  }

  ngOnInit() {
  }

  exportImage() {

    var element = document.getElementById('to-png');

    htmltoimage.toBlob(element).then(function (blob) {

      saveAs(blob, "export.png");

    });
  }
}