import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { DeleteTextPipe } from './delete-text.pipe';
import { EnlargeDirective } from './enlarge.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    DeleteTextPipe,
    EnlargeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
