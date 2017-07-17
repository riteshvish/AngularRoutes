import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';


import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './pages/about.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AboutComponent, AboutHomeComponent, AboutItemComponent,
    HomeComponent,
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
