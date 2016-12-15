import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { logReducer } from './reducers/log';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({ log: logReducer })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [LOG_LOGGER_PROVIDERS]
})
export class AppModule { }
