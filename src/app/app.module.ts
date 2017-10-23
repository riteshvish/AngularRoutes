import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './pages/about.component';
import { HomeComponent } from './pages/home.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [
    AboutComponent, AboutHomeComponent, AboutItemComponent,
    HomeComponent,
    AppComponent,
    CardsComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
