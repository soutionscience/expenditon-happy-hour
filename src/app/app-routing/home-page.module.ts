import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'

import { HomePageComponent } from '../PAGES/home-page/home-page.component';

const routes : Routes=[
  {path: '', component: HomePageComponent},
 

]

@NgModule({
  declarations: [ HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
