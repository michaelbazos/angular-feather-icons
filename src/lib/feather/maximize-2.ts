import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-maximize-2',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-maximize-2">
    <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>`
})
export class IconMaximize2Component {}

@NgModule({
  declarations: [ IconMaximize2Component ],
  entryComponents: [ IconMaximize2Component ],
  exports: [ IconMaximize2Component ]
})
export class IconMaximize2 {}
