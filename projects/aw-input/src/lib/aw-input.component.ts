import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from './common/input-ref.directive';
import { commonCss } from './common.css';
import { defaulTheme } from './aw-input-default-theme.css';

interface CssClasses {
  [key: string]: boolean;
  fa: boolean;
}


@Component({
  selector: 'aw-input',
  template: `
    <i class="icon" [ngClass]="classes"></i>
    <ng-content></ng-content>
  `,
  styles: [
    commonCss , defaulTheme
  ]
})
export class AwInputComponent {

  @Input() icon: string | undefined;


  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective | undefined;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('inourt required');
    }

  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false
  }


  get classes() {
    const cssClasses: CssClasses = {
      'fa': true
    };
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }


}
