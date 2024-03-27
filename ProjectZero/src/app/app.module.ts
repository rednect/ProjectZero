import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Importe o RouterModule antes do AppRoutingModule
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
