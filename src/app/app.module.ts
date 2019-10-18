import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcnCheckerComponent } from './component/acn-checker/acn-checker.component';
import { FormsModule } from '@angular/forms';
import { EventDisableDirective } from './directive/event-disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    AcnCheckerComponent,
    EventDisableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
