import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutdevComponent } from './aboutdev/aboutdev.component';

const routes: Routes = [
  {
    path: '', component: AboutdevComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
