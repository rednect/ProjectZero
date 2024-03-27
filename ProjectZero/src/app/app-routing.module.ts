import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }