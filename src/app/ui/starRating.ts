import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rater',
  template: `
    <span
      *ngIf="display > 0"
      (click)="onSelect(1)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 1"
      (click)="onSelect(2)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 2"
      (click)="onSelect(3)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 3"
      (click)="onSelect(4)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 4"
      (click)="onSelect(5)"
      class="black"
      >★
    </span>
    <span
      [hidden]="display > 0"
      (click)="onSelect(1)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 1"
      (click)="onSelect(2)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 2"
      (click)="onSelect(3)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 3"
      (click)="onSelect(4)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 4"
      (click)="onSelect(5)"
      class="white"
      >☆
    </span>
  `,
  styles: ['']
})

export class StarRater {
  @Input() display = 0;

  hide(num) {
    this.display = num;
  }

  show(num) {
    this.display = 0;
  }

  onSelect(num) {
    this.display = num;
  }

}

    // <span
    //   *ngIf="display > 0"
    //   (mouseenter)="hide(1)"
    //   (mouseleave)="show(0)"
    //   (click)="onSelect(1)"
    //   class="black"
    //   >★
    // </span>
    // <span
    //   *ngIf="display > 1"
    //   (mouseenter)="hide(2)"
    //   (mouseleave)="show(1)"
    //   (click)="onSelect(2)"
    //   class="black"
    //   >★
    // </span>
    // <span
    //   *ngIf="display > 2"
    //   (mouseenter)="hide(3)"
    //   (mouseleave)="show(2)"
    //   (click)="onSelect(3)"
    //   class="black"
    //   >★
    // </span>
    // <span
    //   *ngIf="display > 3"
    //   (mouseenter)="hide(4)"
    //   (mouseleave)="show(3)"
    //   (click)="onSelect(4)"
    //   class="black"
    //   >★
    // </span>
    // <span
    //   *ngIf="display > 4"
    //   (mouseenter)="hide(5)"
    //   (mouseleave)="show(4)"
    //   (click)="onSelect(5)"
    //   class="black"
    //   >★
    // </span>
