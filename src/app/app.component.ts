import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as log from './actions/log';
import * as fromRoot from './reducers';
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
  log$: Observable<String[]>;

  constructor(private $log: Logger, private store: Store<fromRoot.State>) {
    this.log$ = store.select(fromRoot.getMessages);
   }

  resetScores() {
    this.$log.info('reset');
    this.store.dispatch(new log.ResetAction());
    return false;
  }
  addScores(text: String) {
    this.$log.info(text);
    this.store.dispatch(new log.AddMessageAction(text));
    return false;
  }
}
