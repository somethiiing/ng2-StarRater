import { Ng2StarRaterPage } from '../../e2e/app.po';
import { StarRater } from './ui';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Star Rater!</h1>
    <div>Click on a Star to select a rating!</div>
    <star-rater
      (selection)=onNoDefaultRaterSelection($event)
    ></star-rater>
    <br>
    <p>You selected {{noDefaultRater}} out of 5 stars.</p>
    <br>
    <br>
    <br>
    <br>
    <div>Defaults work as well!</div>
    <star-rater
      [display]="4"
      (selection)="onWithDefaultRaterSelection($event)"
    ></star-rater>
    <p>You selected {{withDefaultRater}} out of 5 stars.</p>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'app';
  noDefaultRater = 0;
  withDefaultRater = 4;

  onNoDefaultRaterSelection(num) {
    this.noDefaultRater = num;
  }

  onWithDefaultRaterSelection(num) {
    this.withDefaultRater = num;
  }
}
