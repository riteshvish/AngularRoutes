import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../router.animations';
@Component({
    selector: 'app-about',
    styleUrls: ['./about.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''},
    template: `
    <h2>About</h2>
    <a routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"  [routerLink]="['/about']">Home</a>
    <a routerLinkActive="active"   [routerLink]="['/about/item', 1]">Item 1</a>
    <a routerLinkActive="active"  [routerLink]="['/about/item', 2]">Item 2</a>
    <div class="inner-outlet">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AboutComponent { }

@Component({
  selector: 'about-home',
  template: `<h3>About Home</h3>`
})
export class AboutHomeComponent { }


@Component({
  selector: 'about-item',
  template: `<h3>About Item Id: {{id}}</h3>`
})
export class AboutItemComponent {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
