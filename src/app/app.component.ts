import { Ng2StarRaterPage } from '../../e2e/app.po';
import { StarRater } from './ui';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Hover and click on a Star!</div>
    <star-rater></star-rater>
    <div>Defaults work as well!</div>
    <star-rater
      [display]="4"
    ></star-rater>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'app';
}
