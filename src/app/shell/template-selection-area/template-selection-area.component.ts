import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { WorkspaceComponent } from '../workspace/workspace.component';

@Component({
  selector: 'app-template-selection-area',
  templateUrl: './template-selection-area.component.html',
  styleUrls: ['./template-selection-area.component.sass']
})
export class TemplateSelectionAreaComponent implements OnInit {

  constructor(public globalService: GlobalService, ) { }

  ngOnInit() {
  }

  setTemplateNumber(number: string) {

    this.globalService.setTemplateNumber(parseInt(number));
    new WorkspaceComponent(this.globalService);
  }

}
