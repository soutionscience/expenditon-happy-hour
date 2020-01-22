import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule , CanActivate} from '@angular/router';
import { WelcomeComponent } from '../PAGES/welcome/welcome.component';
import { MenuComponent } from '../COMPONENTS/menu/menu.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, children:[
    {path: '', loadChildren: './home-page.module#HomePageModule'}
  ]}
];

@NgModule({
  declarations: [WelcomeComponent, MenuComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
