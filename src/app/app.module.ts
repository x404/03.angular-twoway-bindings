import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: 'ngmodel', component: NgModelComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
