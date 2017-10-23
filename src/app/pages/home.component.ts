import { Component } from '@angular/core';
import { routerTransition } from './../router.animations';
@Component({
  selector: 'app-home',
  template: `<h2>Home</h2>`,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent { }
