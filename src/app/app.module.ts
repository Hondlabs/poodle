import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { SplashComponent } from './splash/splash.component';
import { WorkspaceComponent } from './shell/workspace/workspace.component';
import { EditingAreaComponent } from './shell/editing-area/editing-area.component';
import { ImgSelectionAreaComponent } from './shell/img-selection-area/img-selection-area.component';
import { TemplateSelectionAreaComponent } from './shell/template-selection-area/template-selection-area.component';

import { GlobalService } from './shared/services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
    SplashComponent,
    WorkspaceComponent,
    EditingAreaComponent,
    ImgSelectionAreaComponent,
    TemplateSelectionAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
