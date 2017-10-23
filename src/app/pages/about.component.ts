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
  styleUrls: ['./about.component.css'],
  template: `<h3>
  About Item Id: {{id}}

  </h3>
  <div class="card-block-container">
    <div class="card-block">
      <app-cards style="display:inline-block;width:375px;height:475px;border:1px solid #ccc"
      *ngFor="let d of data;let index=index"
      (clickcards)="clickme($event)"
      [data]='d'
      >{{index}}</app-cards>
    </div>
  </div>
  `
})
export class AboutItemComponent {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }
  data=[{_id:1},{_id:2},{_id:3},{_id:4},{_id:5},{_id:6},{_id:7},{_id:8},{_id:9},{_id:10},{_id:11},{_id:12}];
  clickme(data){
    console.log(data)
  }
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
