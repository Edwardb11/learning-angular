import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,PipesCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
