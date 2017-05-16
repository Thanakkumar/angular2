import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule ,FormsModule}   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }         from './app.component';
import { Logout } from './logout';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { LoginComponent }  from './login.component';
import { Authentication } from './authentication';



@NgModule({
  imports: [
    BrowserModule,
     ReactiveFormsModule,FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    LoginComponent,
    Logout
  ],
  providers: [ HeroService,Authentication ],
  bootstrap: [ LoginComponent ]
})
export class AppModule { }
