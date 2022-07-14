import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTask1 } from './component/task1.component';
import { Task2Component } from './task2/task2.component';
import { AuthorComponent } from './author/author.component';
import { Author2Component } from './authorDetail/authorDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTask1,
    Task2Component,
    AuthorComponent,
    Author2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
