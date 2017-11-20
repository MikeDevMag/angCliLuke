import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { BootComponent } from './boot/boot.component';
import { HomeComponent } from './home/home.component';


import { NamesListComponent } from './names-list/names-list.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    TestComponent,
    Test2Component,
    BootComponent,
    HomeComponent,
    NamesListComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
