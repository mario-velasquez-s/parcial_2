import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting,]
  bootstrap: [AppComponent]


})
export class AppModule { }
