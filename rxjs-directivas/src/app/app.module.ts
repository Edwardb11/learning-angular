import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { ThemeDirective } from './directives/theme.directive';

@NgModule({
  declarations: [AppComponent, ThemeDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
