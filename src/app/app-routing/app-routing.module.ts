import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', loadChildren: './welcome.module#WelcomeModule'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule, AppComponent]
})
export class AppRoutingModule { }
