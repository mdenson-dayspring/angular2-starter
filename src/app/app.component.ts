import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_MESSAGE, RESET } from './reducers/log';
import '../sass/styles.scss';

interface AppState {
  logger: string[];
}

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  log$: Observable<string[]>;

  constructor(private $log: Logger, private store: Store<any>) {
    this.log$ = <Observable<string[]>>store.select('log');
   }

  resetScores() {
    this.$log.info('reset');
    this.store.dispatch({type: RESET});
    return false;
  }
  addScores(text: String) {
    this.$log.info(text);
    this.store.dispatch({type:ADD_MESSAGE, payload:text});
    return false;
  }
}
